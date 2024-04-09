# syntax=docker/dockerfile:1
# Final container image
# hadolint global ignore=DL3006,DL3059,DL4006,SC2086,DL3015,DL3008,DL3003
ARG IMAGE_BASE=alpine:3.18
# hadolint ignore=DL3006
FROM ${IMAGE_BASE} as image-base

FROM --platform=${BUILDPLATFORM} golang:1.21 as backend-build

WORKDIR /headlamp

ARG TARGETOS
ARG TARGETARCH
ENV GOPATH=/go \
    GOPROXY=https://proxy.golang.org \
	GO111MODULE=on\
	CGO_ENABLED=0\ 
	GOOS=${TARGETOS}\
	GOARCH=${TARGETARCH}

# Keep go mod download separated so source changes don't trigger install
COPY ./backend/go.* /headlamp/backend/
RUN --mount=type=cache,target=/go/pkg/mod \
    cd ./backend && go mod download

COPY ./backend /headlamp/backend

RUN --mount=type=cache,target=/root/.cache/go-build \
    --mount=type=cache,target=/go/pkg/mod \
    cd ./backend && go build -o ./headlamp-server ./cmd/

FROM --platform=${BUILDPLATFORM} node:18 as frontend-build

# We need .git and app/ in order to get the version and git version for the frontend/.env file
# that's generated when building the frontend.
COPY ./.git /headlamp/.git
COPY app/package.json /headlamp/app/package.json

# Keep npm install separated so source changes don't trigger install
COPY frontend/package*.json /headlamp/frontend/
COPY frontend/patches/* /headlamp/frontend/patches/
WORKDIR /headlamp
RUN cd ./frontend && npm install --only=prod

FROM frontend-build as frontend
COPY ./frontend /headlamp/frontend

WORKDIR /headlamp

RUN cd ./frontend && npm run build

RUN echo "*** Built Headlamp with version: ***"
RUN cat ./frontend/.env

# Backwards compatibility, move plugin folder to only copy matching plugins.
RUN mv plugins plugins-old || true

RUN mkdir -p ./plugins

# Backwards compatibility, copy any matching plugins found inside "./plugins-old" into "./plugins".
# They should match plugins-old/MyFolder/main.js, otherwise they are not copied.
RUN for i in $(find ./plugins-old/*/main.js); do plugin_name=$(echo $i|cut -d'/' -f3); mkdir -p plugins/$plugin_name; cp $i plugins/$plugin_name; done

RUN for i in $(find ./.plugins/*/main.js); do plugin_name=$(echo $i|cut -d'/' -f3); mkdir -p plugins/$plugin_name; cp $i plugins/$plugin_name; done

# Static (officially shipped) plugins
FROM --platform=${BUILDPLATFORM} frontend-build as static-plugins
RUN apt-get update && apt-get install -y jq
COPY ./container/build-manifest.json ./container/fetch-plugins.sh /tools/

WORKDIR /tools
RUN mkdir -p /plugins
RUN ./fetch-plugins.sh /plugins/

FROM image-base as final

RUN if command -v apt-get > /dev/null; then \
        apt-get update && apt-get install -y --no-install-recommends \
        ca-certificates \
        && addgroup --system headlamp \
        && adduser --system --ingroup headlamp headlamp \
        && rm -rf /var/lib/apt/lists/*; \
    else \
        addgroup -S headlamp && adduser -S headlamp -G headlamp; \
    fi

COPY --from=backend-build /headlamp/backend/headlamp-server /headlamp/headlamp-server
COPY --from=frontend /headlamp/frontend/build /headlamp/frontend
COPY --from=frontend /headlamp/plugins /headlamp/plugins
COPY --from=static-plugins /plugins /headlamp/static-plugins

RUN chown -R headlamp:headlamp /headlamp
USER headlamp

EXPOSE 4466

ENV HEADLAMP_STATIC_PLUGINS_DIR=/headlamp/static-plugins
ENTRYPOINT ["/headlamp/headlamp-server", "-html-static-dir", "/headlamp/frontend"]

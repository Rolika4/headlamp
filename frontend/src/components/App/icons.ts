import { addCollection } from '@iconify/react';

/**
 * This is for bundling icons for offline use.
 *
 * Documentation for iconify icon bundling for offline use:
 * - https://docs.iconify.design/icon-components/bundles/
 * - https://docs.iconify.design/icon-components/bundles/react.html
 *
 * Make sure you have the "alias" part added as well as the icon.
 *   Otherwise it downloads the icon too even if it's in icons.
 */

/**
  https://api.iconify.design/mdi.json?icons=weather-night,weather-sunny
 */
const mdiIcons = {
  prefix: 'mdi',
  icons: {
    'weather-night': {
      body: '<path fill="currentColor" d="m17.75 4.09l-2.53 1.94l.91 3.06l-2.63-1.81l-2.63 1.81l.91-3.06l-2.53-1.94L12.44 4l1.06-3l1.06 3l3.19.09m3.5 6.91l-1.64 1.25l.59 1.98l-1.7-1.17l-1.7 1.17l.59-1.98L15.75 11l2.06-.05L18.5 9l.69 1.95l2.06.05m-2.28 4.95c.83-.08 1.72 1.1 1.19 1.85c-.32.45-.66.87-1.08 1.27C15.17 23 8.84 23 4.94 19.07c-3.91-3.9-3.91-10.24 0-14.14c.4-.4.82-.76 1.27-1.08c.75-.53 1.93.36 1.85 1.19c-.27 2.86.69 5.83 2.89 8.02a9.96 9.96 0 0 0 8.02 2.89m-1.64 2.02a12.08 12.08 0 0 1-7.8-3.47c-2.17-2.19-3.33-5-3.49-7.82c-2.81 3.14-2.7 7.96.31 10.98c3.02 3.01 7.84 3.12 10.98.31Z"/>',
    },
    'weather-sunny': {
      body: '<path fill="currentColor" d="M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0-7l2.39 3.42C13.65 5.15 12.84 5 12 5c-.84 0-1.65.15-2.39.42L12 2M3.34 7l4.16-.35A7.2 7.2 0 0 0 5.94 8.5c-.44.74-.69 1.5-.83 2.29L3.34 7m.02 10l1.76-3.77a7.131 7.131 0 0 0 2.38 4.14L3.36 17M20.65 7l-1.77 3.79a7.023 7.023 0 0 0-2.38-4.15l4.15.36m-.01 10l-4.14.36c.59-.51 1.12-1.14 1.54-1.86c.42-.73.69-1.5.83-2.29L20.64 17M12 22l-2.41-3.44c.74.27 1.55.44 2.41.44c.82 0 1.63-.17 2.37-.44L12 22Z"/>',
    },
    account: {
      body: '<path fill="currentColor" d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4Z"/>',
    },
    'alert-outline': {
      body: '<path fill="currentColor" d="M12 2L1 21h22M12 6l7.53 13H4.47M11 10v4h2v-4m-2 6v2h2v-2"/>',
    },
    'dots-vertical': {
      body: '<path fill="currentColor" d="M12 16a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0-6a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0-6a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2Z"/>',
    },
    logout: {
      body: '<path fill="currentColor" d="M16 17v-3H9v-4h7V7l5 5l-5 5M14 2a2 2 0 0 1 2 2v2h-2V4H5v16h9v-2h2v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9Z"/>',
    },
    kubernetes: {
      body: '<path fill="currentColor" d="M13.95 13.5h-.23c-.18.11-.26.32-.18.5l.86 2.11c.83-.53 1.46-1.32 1.79-2.25l-2.23-.36h-.01m-3.45.29a.415.415 0 0 0-.38-.29h-.08l-2.22.37c.33.92.96 1.7 1.79 2.23l.85-2.07V14c.04-.05.04-.14.04-.21m1.83.81a.378.378 0 0 0-.51-.15c-.07.05-.12.08-.15.15h-.01l-1.09 1.97c.78.26 1.62.31 2.43.12c.14-.03.29-.07.43-.12l-1.09-1.97h-.01m3.45-4.57L14.1 11.5l.01.03a.37.37 0 0 0-.04.53c.05.06.11.1.18.12l.01.01l2.17.62c.07-.97-.14-1.95-.65-2.78m-3.11.16c.01.21.18.37.39.36c.08 0 .15-.02.21-.05h.01l1.83-1.31a4.45 4.45 0 0 0-2.57-1.24l.13 2.24m-1.94.31c.17.11.4.08.52-.09c.05-.06.07-.13.08-.21h.01l.12-2.25c-.15.02-.3.05-.46.08c-.8.18-1.54.58-2.12 1.16l1.84 1.31h.01m-.99 1.69c.2-.05.32-.26.26-.46c0-.08-.05-.14-.11-.19v-.01L8.21 10c-.52.86-.74 1.84-.63 2.82l2.16-.62v-.01m1.64.66l.62.3l.62-.3l.15-.67l-.43-.53h-.69l-.43.53l.16.67m10.89 1.32L20.5 6.5c-.09-.42-.37-.76-.74-.94l-7.17-3.43c-.37-.17-.81-.17-1.19 0L4.24 5.56c-.37.18-.65.52-.74.94l-1.77 7.67c-.05.2-.05.4 0 .59c.01.06.03.12.05.18c.03.09.08.19.13.27c.03.04.05.08.09.11l4.95 6.18c.02 0 .05.04.05.06c.1.09.19.16.28.22c.12.08.26.14.4.17c.11.05.23.05.32.05h8.12c.07 0 .14-.03.2-.05c.05-.01.1-.03.14-.04c.04-.02.07-.03.11-.05c.05-.02.1-.05.15-.08c.12-.08.23-.18.33-.28l.15-.2l4.8-5.98c.1-.12.17-.25.22-.38c.02-.06.04-.12.05-.18c.05-.19.05-.4 0-.59m-7.43 2.99c.02.06.04.12.07.17c-.04.08-.06.17-.03.26c.12.24.23.46.38.68c.08.11.16.23.24.34c0 .03.03.08.04.12c.12.2.06.46-.15.59s-.47.05-.59-.15c-.01-.03-.02-.05-.03-.08c-.02-.03-.04-.09-.06-.09c-.05-.15-.09-.28-.12-.41c-.09-.25-.17-.49-.3-.72a.375.375 0 0 0-.21-.14l-.08-.16c-1.29.48-2.7.48-3.97-.01l-.1.18c-.07.01-.14.04-.19.09c-.14.24-.24.49-.33.77c-.03.13-.07.26-.12.4c-.02 0-.04.07-.06.1a.43.43 0 0 1-.81-.29c.01-.03.03-.05.04-.08c.04-.03.04-.08.04-.11c.09-.12.16-.23.24-.35c.16-.21.29-.45.39-.69a.54.54 0 0 0-.03-.25l.07-.18a5.611 5.611 0 0 1-2.47-3.09l-.2.03a.388.388 0 0 0-.23-.09c-.27.05-.51.13-.77.22c-.11.06-.24.11-.37.15c-.03.01-.07.02-.13.03a.438.438 0 0 1-.54-.27c-.07-.23.04-.47.28-.55c.02 0 .05-.01.08-.01v-.01h.01l.11-.02c.14-.04.28-.04.41-.04c.26 0 .52-.06.77-.12c.08-.05.14-.11.19-.19l.19-.05c-.21-1.36.1-2.73.86-3.87l-.14-.12c0-.09-.03-.18-.08-.25c-.2-.17-.41-.32-.64-.45c-.12-.06-.24-.13-.36-.21c-.02-.02-.06-.05-.08-.07l-.01-.01c-.2-.16-.25-.42-.11-.63c.09-.1.21-.15.35-.15c.11.01.21.05.3.12l.09.07c.1.09.19.2.28.3c.18.19.37.37.58.52c.08.04.17.05.26.03l.15.11c.75-.8 1.73-1.36 2.8-1.6c.25-.06.52-.1.78-.12l.01-.18a.45.45 0 0 0 .14-.23c.01-.26-.01-.52-.05-.77c-.03-.13-.05-.27-.06-.41V5.1c-.02-.24.15-.45.39-.48s.44.15.47.38v.22c-.01.14-.03.28-.06.41c-.04.25-.06.51-.05.77c.02.1.07.17.14.22l.01.19c1.36.12 2.62.73 3.56 1.72l.16-.12c.09.02.18.01.26-.03c.21-.15.41-.33.58-.52c.09-.1.18-.2.28-.3c.03-.02.07-.06.1-.06c.17-.18.44-.18.59 0c.19.16.18.43 0 .6c0 .02-.03.04-.06.06a2.495 2.495 0 0 1-.44.28c-.23.13-.45.28-.64.45c-.06.07-.09.15-.08.24l-.16.14a5.44 5.44 0 0 1 .88 3.86l.19.05c.04.08.11.14.19.18c.25.07.51.11.77.14h.41c.03.03.08.04.12.05c.24.03.4.25.37.49c-.05.23-.24.4-.48.37c-.03-.01-.07-.01-.07-.02v-.01c-.06 0-.1-.01-.14-.02c-.13-.04-.25-.09-.36-.15c-.26-.1-.5-.17-.77-.21c-.09 0-.17 0-.23.08c-.07-.01-.13-.02-.19-.03c-.41 1.31-1.31 2.41-2.47 3.11Z"/>',
    },
    plus: {
      body: '<path fill="currentColor" d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2Z"/>',
    },
    eye: {
      body: '<path fill="currentColor" d="M12 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5a5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5Z"/>',
    },
    'eye-outline': {
      body: '<path fill="currentColor" d="M12 9a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-4.5c5 0 9.27 3.11 11 7.5c-1.73 4.39-6 7.5-11 7.5S2.73 16.39 1 12c1.73-4.39 6-7.5 11-7.5M3.18 12a9.821 9.821 0 0 0 17.64 0a9.821 9.821 0 0 0-17.64 0Z"/>',
    },
    'eye-off': {
      body: '<path fill="currentColor" d="M11.83 9L15 12.16V12a3 3 0 0 0-3-3h-.17m-4.3.8l1.55 1.55c-.05.21-.08.42-.08.65a3 3 0 0 0 3 3c.22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53a5 5 0 0 1-5-5c0-.79.2-1.53.53-2.2M2 4.27l2.28 2.28l.45.45C3.08 8.3 1.78 10 1 12c1.73 4.39 6 7.5 11 7.5c1.55 0 3.03-.3 4.38-.84l.43.42L19.73 22L21 20.73L3.27 3M12 7a5 5 0 0 1 5 5c0 .64-.13 1.26-.36 1.82l2.93 2.93c1.5-1.25 2.7-2.89 3.43-4.75c-1.73-4.39-6-7.5-11-7.5c-1.4 0-2.74.25-4 .7l2.17 2.15C10.74 7.13 11.35 7 12 7Z"/>',
    },
    'information-outline': {
      body: '<path fill="currentColor" d="M11 9h2V7h-2m1 13c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m-1 15h2v-6h-2v6Z"/>',
    },
    'file-download-outline': {
      body: '<path fill="currentColor" d="m14 2l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8m4 18V9h-5V4H6v16h12m-6-1l-4-4h2.5v-3h3v3H16l-4 4Z"/>',
    },
    'checkbox-blank-outline': {
      body: '<path fill="currentColor" d="M19 3H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m0 2v14H5V5h14Z"/>',
    },
    'checkbox-outline': {
      body: '<path fill="currentColor" d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m0 2v14H5V5h14m-9 12l-4-4l1.41-1.42L10 14.17l6.59-6.59L18 9"/>',
    },
    'filter-variant': {
      body: '<path fill="currentColor" d="M6 13h12v-2H6M3 6v2h18V6M10 18h4v-2h-4v2Z"/>',
    },
    'filter-variant-remove': {
      body: '<path fill="currentColor" d="M21 8H3V6h18v2m-7.19 8H10v2h3.09c.12-.72.37-1.39.72-2M18 11H6v2h12v-2m3.12 4.46L19 17.59l-2.12-2.13l-1.41 1.42L17.59 19l-2.12 2.12l1.41 1.42L19 20.41l2.12 2.13l1.42-1.42L20.41 19l2.13-2.12l-1.42-1.42Z"/>',
    },
    'menu-up': {
      body: '<path fill="currentColor" d="m7 15l5-5l5 5H7Z"/>',
    },
    'menu-down': {
      body: '<path fill="currentColor" d="m7 10l5 5l5-5H7Z"/>',
    },
    'menu-swap': {
      body: '<path fill="currentColor" d="m12 6l-5 5h10l-5-5m-5 7l5 5l5-5H7Z"/>',
    },
    refresh: {
      body: '<path fill="currentColor" d="M17.65 6.35A7.958 7.958 0 0 0 12 4a8 8 0 0 0-8 8a8 8 0 0 0 8 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0 1 12 18a6 6 0 0 1-6-6a6 6 0 0 1 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35Z"/>',
    },
    close: {
      body: '<path fill="currentColor" d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"/>',
    },
    'chevron-down': {
      body: '<path fill="currentColor" d="M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6l-6-6l1.41-1.42Z"/>',
    },
    'chevron-left': {
      body: '<path fill="currentColor" d="M15.41 16.58L10.83 12l4.58-4.59L14 6l-6 6l6 6l1.41-1.42Z"/>',
    },
    'chevron-right': {
      body: '<path fill="currentColor" d="M8.59 16.58L13.17 12L8.59 7.41L10 6l6 6l-6 6l-1.41-1.42Z"/>',
    },
    'shield-key': {
      body: '<path fill="currentColor" d="M12 8a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1m9 3c0 5.55-3.84 10.74-9 12c-5.16-1.26-9-6.45-9-12V5l9-4l9 4v6m-9-5a3 3 0 0 0-3 3c0 1.31.83 2.42 2 2.83V18h2v-2h2v-2h-2v-2.17c1.17-.41 2-1.52 2-2.83a3 3 0 0 0-3-3Z"/>',
    },
    pencil: {
      body: '<path fill="currentColor" d="M20.71 7.04c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.37-.39-1.02-.39-1.41 0l-1.84 1.83l3.75 3.75M3 17.25V21h3.75L17.81 9.93l-3.75-3.75L3 17.25Z"/>',
    },
    delete: {
      body: '<path fill="currentColor" d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6v12Z"/>',
    },
    bug: {
      body: '<path fill="currentColor" d="M14 12h-4v-2h4m0 6h-4v-2h4m6-6h-2.81a5.985 5.985 0 0 0-1.82-1.96L17 4.41L15.59 3l-2.17 2.17a6.002 6.002 0 0 0-2.83 0L8.41 3L7 4.41l1.62 1.63C7.88 6.55 7.26 7.22 6.81 8H4v2h2.09c-.05.33-.09.66-.09 1v1H4v2h2v1c0 .34.04.67.09 1H4v2h2.81c1.04 1.79 2.97 3 5.19 3s4.15-1.21 5.19-3H20v-2h-2.09c.05-.33.09-.66.09-1v-1h2v-2h-2v-1c0-.34-.04-.67-.09-1H20V8Z"/>',
    },
    console: {
      body: '<path fill="currentColor" d="M20 19V7H4v12h16m0-16a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16m-7 14v-2h5v2h-5m-3.42-4L5.57 9H8.4l3.3 3.3c.39.39.39 1.03 0 1.42L8.42 17H5.59l3.99-4Z"/>',
    },
    'text-box-search-outline': {
      body: '<path fill="currentColor" d="M15.5 12c2.5 0 4.5 2 4.5 4.5c0 .88-.25 1.71-.69 2.4l3.08 3.1L21 23.39l-3.12-3.07c-.69.43-1.51.68-2.38.68c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5m0 2a2.5 2.5 0 0 0-2.5 2.5a2.5 2.5 0 0 0 2.5 2.5a2.5 2.5 0 0 0 2.5-2.5a2.5 2.5 0 0 0-2.5-2.5M5 3h14c1.11 0 2 .89 2 2v8.03c-.5-.8-1.19-1.49-2-2.03V5H5v14h4.5c.31.75.76 1.42 1.31 2H5c-1.11 0-2-.89-2-2V5c0-1.11.89-2 2-2m2 4h10v2H7V7m0 4h5.03c-.8.5-1.49 1.19-2.03 2H7v-2m0 4h2.17c-.11.5-.17 1-.17 1.5v.5H7v-2Z"/>',
    },
    'check-bold': {
      body: '<path fill="currentColor" d="m9 20.42l-6.21-6.21l2.83-2.83L9 14.77l9.88-9.89l2.83 2.83L9 20.42Z"/>',
    },
    magnify: {
      body: '<path fill="currentColor" d="M9.5 3A6.5 6.5 0 0 1 16 9.5c0 1.61-.59 3.09-1.56 4.23l.27.27h.79l5 5l-1.5 1.5l-5-5v-.79l-.27-.27A6.516 6.516 0 0 1 9.5 16A6.5 6.5 0 0 1 3 9.5A6.5 6.5 0 0 1 9.5 3m0 2C7 5 5 7 5 9.5S7 14 9.5 14S14 12 14 9.5S12 5 9.5 5Z"/>',
    },
    'format-letter-case': {
      body: '<path fill="currentColor" d="M20.06 18a3.99 3.99 0 0 1-.2-.89c-.67.7-1.48 1.05-2.41 1.05c-.83 0-1.52-.24-2.05-.71c-.53-.45-.8-1.06-.8-1.79c0-.88.33-1.56 1-2.05c.67-.49 1.61-.73 2.83-.73h1.4v-.64c0-.49-.15-.88-.45-1.17c-.3-.29-.75-.43-1.33-.43c-.52 0-.95.12-1.3.36c-.35.25-.52.54-.52.89h-1.46c0-.43.15-.84.45-1.24c.28-.4.71-.71 1.22-.94c.51-.21 1.06-.35 1.69-.35c.98 0 1.74.24 2.29.73s.84 1.16.86 2.02V16c0 .8.1 1.42.3 1.88V18h-1.52m-2.4-1.12c.45 0 .88-.11 1.29-.32c.4-.21.7-.49.88-.83v-1.57H18.7c-1.77 0-2.66.47-2.66 1.41c0 .43.15.73.46.96c.3.23.68.35 1.16.35m-12.2-3.17h4.07L7.5 8.29l-2.04 5.42M6.64 6h1.72l4.71 12h-1.93l-.97-2.57H4.82L3.86 18H1.93L6.64 6Z"/>',
    },
    'format-letter-matches': {
      body: '<path fill="currentColor" d="M11.14 4L6.43 16h1.93l.96-2.57h5.35l.97 2.57h1.93L12.86 4M12 6.29l2.03 5.42H9.96M20 14v4H4v-3H2v5h20v-6Z"/>',
    },
    regex: {
      body: '<path fill="currentColor" d="M16 16.92c-.33.05-.66.08-1 .08c-.34 0-.67-.03-1-.08v-3.51l-2.5 2.48c-.5-.39-1-.89-1.39-1.39l2.48-2.5H9.08c-.05-.33-.08-.66-.08-1c0-.34.03-.67.08-1h3.51l-2.48-2.5c.19-.25.39-.5.65-.74c.24-.26.49-.46.74-.65L14 8.59V5.08c.33-.05.66-.08 1-.08c.34 0 .67.03 1 .08v3.51l2.5-2.48c.5.39 1 .89 1.39 1.39L17.41 10h3.51c.05.33.08.66.08 1c0 .34-.03.67-.08 1h-3.51l2.48 2.5c-.19.25-.39.5-.65.74c-.24.26-.49.46-.74.65L16 13.41v3.51M5 19a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2Z"/>',
    },
    'arrow-up': {
      body: '<path fill="currentColor" d="M13 20h-2V8l-5.5 5.5l-1.42-1.42L12 4.16l7.92 7.92l-1.42 1.42L13 8v12Z"/>',
    },
    'arrow-down': {
      body: '<path fill="currentColor" d="M11 4h2v12l5.5-5.5l1.42 1.42L12 19.84l-7.92-7.92L5.5 10.5L11 16V4Z"/>',
    },
    'cloud-outline': {
      body: '<path fill="currentColor" d="M19 18H6a4 4 0 0 1-4-4a4 4 0 0 1 4-4h.71C7.37 7.69 9.5 6 12 6a5.5 5.5 0 0 1 5.5 5.5v.5H19a3 3 0 0 1 3 3a3 3 0 0 1-3 3m.35-7.97A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.03A6.004 6.004 0 0 0 0 14a6 6 0 0 0 6 6h13a5 5 0 0 0 5-5c0-2.64-2.05-4.78-4.65-4.97Z"/>',
    },
    folder: {
      body: '<path fill="currentColor" d="M10 4H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-8l-2-2Z"/>',
    },
    'circle-slice-2': {
      body: '<path fill="currentColor" d="M12 2c5.5 0 10 4.5 10 10s-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2m0 2c-4.42 0-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8s-3.58-8-8-8m0 1c3.87 0 7 3.13 7 7h-7V5Z"/>',
    },
    home: {
      body: '<path fill="currentColor" d="M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8h5Z"/>',
    },
    'plus-circle': {
      body: '<path fill="currentColor" d="M17 13h-4v4h-2v-4H7v-2h4V7h2v4h4m-5-9A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2Z"/>',
    },
    tune: {
      body: '<path fill="currentColor" d="M3 17v2h6v-2H3M3 5v2h10V5H3m10 16v-2h8v-2h-8v-2h-2v6h2M7 9v2H3v2h4v2h2V9H7m14 4v-2H11v2h10m-6-4h2V7h4V5h-4V3h-2v6Z"/>',
    },
    database: {
      body: '<path fill="currentColor" d="M12 3C7.58 3 4 4.79 4 7s3.58 4 8 4s8-1.79 8-4s-3.58-4-8-4M4 9v3c0 2.21 3.58 4 8 4s8-1.79 8-4V9c0 2.21-3.58 4-8 4s-8-1.79-8-4m0 5v3c0 2.21 3.58 4 8 4s8-1.79 8-4v-3c0 2.21-3.58 4-8 4s-8-1.79-8-4Z"/>',
    },
    'folder-network-outline': {
      body: '<path fill="currentColor" d="M15 20c0-.55-.45-1-1-1h-1v-2h6c1.11 0 2-.89 2-2V7a2 2 0 0 0-2-2h-6l-2-2H5c-1.1 0-2 .9-2 2v10a2 2 0 0 0 2 2h6v2h-1c-.55 0-1 .45-1 1H2v2h7c0 .55.45 1 1 1h4c.55 0 1-.45 1-1h7v-2h-7M5 15V7h14v8H5Z"/>',
    },
    'hexagon-multiple-outline': {
      body: '<path fill="currentColor" d="m9.37 4l1.41 2.5L9.37 9H6.63l-1.4-2.5L6.63 4h2.74m.88-2h-4.5c-.19 0-.36.11-.44.26L3.09 6.22L3 6.5l.09.28l2.22 3.96c.08.15.25.26.44.26h4.5c.19 0 .36-.11.44-.26l2.22-3.96l.09-.28l-.09-.28l-2.22-3.96a.505.505 0 0 0-.44-.26m8.37 7.5L20 12l-1.38 2.5h-2.74L14.5 12l1.38-2.5h2.74m.88-2H15c-.19 0-.36.11-.44.26l-2.22 3.96l-.09.28l.09.28l2.22 3.96c.08.15.25.26.44.26h4.5c.19 0 .36-.11.44-.26l2.22-3.96l.09-.28l-.09-.28l-2.22-3.96a.505.505 0 0 0-.44-.26M9.37 15l1.41 2.5L9.37 20H6.63l-1.4-2.5l1.4-2.5h2.74m.88-2h-4.5c-.19 0-.36.11-.44.26l-2.22 3.96l-.09.28l.09.28l2.22 3.96c.08.15.25.26.44.26h4.5c.19 0 .36-.11.44-.26l2.22-3.96l.09-.28l-.09-.28l-2.22-3.96a.505.505 0 0 0-.44-.26Z"/>',
    },
    lock: {
      body: '<path fill="currentColor" d="M12 17a2 2 0 0 0 2-2a2 2 0 0 0-2-2a2 2 0 0 0-2 2a2 2 0 0 0 2 2m6-9a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h1V6a5 5 0 0 1 5-5a5 5 0 0 1 5 5v2h1m-6-5a3 3 0 0 0-3 3v2h6V6a3 3 0 0 0-3-3Z"/>',
    },
    cog: {
      body: '<path fill="currentColor" d="M12 15.5A3.5 3.5 0 0 1 8.5 12A3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5a3.5 3.5 0 0 1-3.5 3.5m7.43-2.53c.04-.32.07-.64.07-.97c0-.33-.03-.66-.07-1l2.11-1.63c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.31-.61-.22l-2.49 1c-.52-.39-1.06-.73-1.69-.98l-.37-2.65A.506.506 0 0 0 14 2h-4c-.25 0-.46.18-.5.42l-.37 2.65c-.63.25-1.17.59-1.69.98l-2.49-1c-.22-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64L4.57 11c-.04.34-.07.67-.07 1c0 .33.03.65.07.97l-2.11 1.66c-.19.15-.25.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1.01c.52.4 1.06.74 1.69.99l.37 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.37-2.65c.63-.26 1.17-.59 1.69-.99l2.49 1.01c.22.08.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.66Z"/>',
    },
    'cog-box': {
      body: '<path fill="currentColor" d="M17.25 12c0 .23-.02.46-.05.68l1.48 1.16c.13.11.17.29.08.45l-1.4 2.42c-.09.15-.27.21-.43.15l-1.74-.7c-.36.28-.76.51-1.19.69l-.25 1.85c-.03.17-.18.3-.35.3h-2.8c-.17 0-.32-.13-.35-.3L10 16.85c-.44-.18-.83-.41-1.19-.69l-1.74.7c-.16.06-.34 0-.43-.15l-1.4-2.42a.351.351 0 0 1 .08-.45l1.48-1.16c-.03-.22-.05-.45-.05-.68c0-.23.02-.46.05-.68l-1.48-1.16a.353.353 0 0 1-.08-.45l1.4-2.42c.09-.16.27-.22.43-.16l1.74.71c.36-.28.75-.52 1.19-.69l.25-1.86c.03-.16.18-.29.35-.29h2.8c.17 0 .32.13.35.29L14 7.15c.43.17.83.41 1.19.69l1.74-.71c.16-.06.34 0 .43.16l1.4 2.42c.09.15.05.34-.08.45l-1.48 1.16c.03.22.05.45.05.68M19 3H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-7 7c-1.11 0-2 .89-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2Z"/>',
    },
    'format-list-checks': {
      body: '<path fill="currentColor" d="M3 5h6v6H3V5m2 2v2h2V7H5m6 0h10v2H11V7m0 8h10v2H11v-2m-6 5l-3.5-3.5l1.41-1.41L5 17.17l4.59-4.58L11 14l-6 6Z"/>',
    },
    fullscreen: {
      body: '<path fill="currentColor" d="M5 5h5v2H7v3H5V5m9 0h5v5h-2V7h-3V5m3 9h2v5h-5v-2h3v-3m-7 3v2H5v-5h2v3h3Z"/>',
    },
    calendar: {
      body: '<path fill="currentColor" d="M19 19H5V8h14m-3-7v2H8V1H6v2H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-1V1m-1 11h-5v5h5v-5Z"/>',
    },
    'text-box-outline': {
      body: '<path fill="currentColor" d="M5 3c-1.11 0-2 .89-2 2v14c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2H5m0 2h14v14H5V5m2 2v2h10V7H7m0 4v2h10v-2H7m0 4v2h7v-2H7Z"/>',
    },
    bell: {
      body: '<path fill="currentColor" d="M21 19v1H3v-1l2-2v-6c0-3.1 2.03-5.83 5-6.71V4a2 2 0 0 1 2-2a2 2 0 0 1 2 2v.29c2.97.88 5 3.61 5 6.71v6l2 2m-7 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2"/>',
    },
    'hexagon-multiple': {
      body: '<path fill="currentColor" d="M10.25 2c.19 0 .36.11.44.26l2.22 3.96l.09.28l-.09.28l-2.22 3.96c-.08.15-.25.26-.44.26h-4.5c-.19 0-.36-.11-.44-.26L3.09 6.78L3 6.5l.09-.28l2.22-3.96c.08-.15.25-.26.44-.26h4.5m0 11c.19 0 .36.11.44.26l2.22 3.96l.09.28l-.09.28l-2.22 3.96c-.08.15-.25.26-.44.26h-4.5c-.19 0-.36-.11-.44-.26l-2.22-3.96L3 17.5l.09-.28l2.22-3.96c.08-.15.25-.26.44-.26h4.5m9.25-5.5c.19 0 .36.11.44.26l2.22 3.96l.09.28l-.09.28l-2.22 3.96c-.08.15-.25.26-.44.26H15c-.19 0-.36-.11-.44-.26l-2.22-3.96l-.09-.28l.09-.28l2.22-3.96c.08-.15.25-.26.44-.26h4.5Z"/>',
    },
    circle: {
      body: '<path fill="currentColor" d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2Z"/>',
    },
    'cloud-off': {
      body: '<path fill="currentColor" d="M19.8 22.6L17.15 20H6.5q-2.3 0-3.9-1.6T1 14.5q0-1.92 1.19-3.42q1.19-1.51 3.06-1.93q.08-.2.15-.39q.1-.19.15-.41L1.4 4.2l1.4-1.4l18.4 18.4m.4-2.45L8.05 5.23q.88-.6 1.86-.92Q10.9 4 12 4q2.93 0 4.96 2.04Q19 8.07 19 11q1.73.2 2.86 1.5q1.14 1.28 1.14 3q0 1-.37 1.81q-.38.84-1.03 1.44Z"/>',
    },
    'cloud-question': {
      body: '<path fill="currentColor" d="M21.86 12.5A4.313 4.313 0 0 0 19 11c0-1.95-.68-3.6-2.04-4.96C15.6 4.68 13.95 4 12 4c-1.58 0-3 .47-4.25 1.43s-2.08 2.19-2.5 3.72c-1.25.28-2.29.93-3.08 1.95S1 13.28 1 14.58c0 1.51.54 2.8 1.61 3.85C3.69 19.5 5 20 6.5 20h12c1.25 0 2.31-.44 3.19-1.31c.87-.88 1.31-1.94 1.31-3.19c0-1.15-.38-2.15-1.14-3M13 17h-2v-2h2v2m1.8-5.18c-.3.39-.67.68-1.13.93c-.26.16-.43.32-.52.51A1.7 1.7 0 0 0 13 14h-2c0-.55.11-.92.3-1.18c.2-.26.55-.57 1.07-.91c.26-.16.47-.35.63-.59c.15-.23.23-.51.23-.82c0-.32-.09-.56-.27-.74c-.18-.2-.46-.29-.76-.29c-.27 0-.49.08-.7.23c-.15.15-.25.38-.25.69H9.28c-.05-.75.22-1.39.78-1.8C10.6 8.2 11.31 8 12.2 8c.94 0 1.69.23 2.23.68s.81 1.07.81 1.82c0 .5-.15.91-.44 1.32Z"/>',
    },
    'cloud-check-variant': {
      body: '<path fill="currentColor" d="M10.35 17L16 11.35L14.55 9.9l-4.22 4.23l-2.1-2.1l-1.43 1.42M6.5 20q-2.28 0-3.89-1.57Q1 16.85 1 14.58q0-1.95 1.17-3.48q1.18-1.53 3.08-1.95q.63-2.3 2.5-3.72Q9.63 4 12 4q2.93 0 4.96 2.04Q19 8.07 19 11q1.73.2 2.86 1.5q1.14 1.28 1.14 3q0 1.88-1.31 3.19T18.5 20Z"/>',
    },
    'plus-circle-outline': {
      body: '<path fill="currentColor" d="M12 20c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m1 5h-2v4H7v2h4v4h2v-4h4v-2h-4V7Z"/>',
    },
    'progress-check': {
      body: '<path fill="currentColor" d="M13 2.03v2.02c4.39.54 7.5 4.53 6.96 8.92c-.46 3.64-3.32 6.53-6.96 6.96v2c5.5-.55 9.5-5.43 8.95-10.93c-.45-4.75-4.22-8.5-8.95-8.97m-2 .03c-1.95.19-3.81.94-5.33 2.2L7.1 5.74c1.12-.9 2.47-1.48 3.9-1.68v-2M4.26 5.67A9.885 9.885 0 0 0 2.05 11h2c.19-1.42.75-2.77 1.64-3.9L4.26 5.67M15.5 8.5l-4.88 4.88l-2.12-2.12l-1.06 1.06l3.18 3.18l5.94-5.94L15.5 8.5M2.06 13c.2 1.96.97 3.81 2.21 5.33l1.42-1.43A8.002 8.002 0 0 1 4.06 13h-2m5.04 5.37l-1.43 1.37A9.994 9.994 0 0 0 11 22v-2a8.002 8.002 0 0 1-3.9-1.63Z"/>',
    },
    upload: {
      body: '<path fill="currentColor" d="M9 16v-6H5l7-7l7 7h-4v6H9m-4 4v-2h14v2H5Z"/>',
    },
    broom: {
      body: '<path fill="currentColor" d="m19.36 2.72l1.42 1.42l-5.72 5.71c1.07 1.54 1.22 3.39.32 4.59L9.06 8.12c1.2-.9 3.05-.75 4.59.32l5.71-5.72M5.93 17.57c-2.01-2.01-3.24-4.41-3.58-6.65l4.88-2.09l7.44 7.44l-2.09 4.88c-2.24-.34-4.64-1.57-6.65-3.58Z"/>',
    },
    'bell-off-outline': {
      body: '<path fill="currentColor" d="M22.11 21.46L2.39 1.73L1.11 3l4.72 4.72A6.975 6.975 0 0 0 5 11v6l-2 2v1h15.11l2.73 2.73l1.27-1.27M7 18v-7c0-.61.11-1.21.34-1.77L16.11 18H7m3 3h4a2 2 0 0 1-2 2a2 2 0 0 1-2-2M8.29 5.09c.53-.34 1.11-.59 1.71-.8V4a2 2 0 0 1 2-2a2 2 0 0 1 2 2v.29c2.97.88 5 3.61 5 6.71v4.8l-2-2V11a5 5 0 0 0-5-5c-.78 0-1.55.2-2.24.56L8.29 5.09Z"/>',
    },
    'plus-box': {
      body: '<path fill="currentColor" d="M17 13h-4v4h-2v-4H7v-2h4V7h2v4h4m2-8H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2Z"/>',
    },
    'fast-forward': {
      body: '<path fill="currentColor" d="M13 6v12l8.5-6M4 18l8.5-6L4 6v12Z"/>',
    },
    'delete-outline': {
      body: '<path fill="currentColor" d="M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6v12M8 9h8v10H8V9m7.5-5l-1-1h-5l-1 1H5v2h14V4h-3.5Z"/>',
    },
    'stop-circle-outline': {
      body: '<path fill="currentColor" d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m0 2c4.41 0 8 3.59 8 8s-3.59 8-8 8s-8-3.59-8-8s3.59-8 8-8M9 9v6h6V9"/>',
    },
    'view-column': {
      body: '<path fill="currentColor" d="M16 5v13h5V5M4 18h5V5H4m6 13h5V5h-5v13Z"/>',
    },
    restart: {
      body: '<path fill="currentColor" d="M12 4c2.1 0 4.1.8 5.6 2.3c3.1 3.1 3.1 8.2 0 11.3c-1.8 1.9-4.3 2.6-6.7 2.3l.5-2c1.7.2 3.5-.4 4.8-1.7c2.3-2.3 2.3-6.1 0-8.5C15.1 6.6 13.5 6 12 6v4.6l-5-5l5-5V4M6.3 17.6C3.7 15 3.3 11 5.1 7.9l1.5 1.5c-1.1 2.2-.7 5 1.2 6.8c.5.5 1.1.9 1.8 1.2l-.6 2c-1-.4-1.9-1-2.7-1.8Z"/>',
    },
    'content-copy': {
      body: '<path fill="currentColor" d="M19 21H8V7h11m0-2H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2m-3-4H4a2 2 0 0 0-2 2v14h2V3h12V1Z"/>',
    },
    minus: {
      body: '<path fill="currentColor" d="M19 13H5v-2h14v2Z"/>',
    },
    warning: {
      body: '<path fill="currentColor" d="M13 14h-2V9h2m0 9h-2v-2h2M1 21h22L12 2L1 21Z"/>',
    },
    square: {
      body: '<path fill="currentColor" d="M3 3v18h18V3"/>',
    },
    'play-circle': {
      body: '<path fill="currentColor" d="M10 16.5v-9l6 4.5M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2Z"/>',
    },
    'lightning-bolt-circle': {
      body: '<path fill="currentColor" d="m11.5 20l4.86-9.73H13V4l-5 9.73h3.5V20M12 2c2.75 0 5.1 1 7.05 2.95C21 6.9 22 9.25 22 12s-1 5.1-2.95 7.05C17.1 21 14.75 22 12 22s-5.1-1-7.05-2.95C3 17.1 2 14.75 2 12s1-5.1 2.95-7.05C6.9 3 9.25 2 12 2Z"/>',
    },
    'pause-circle': {
      body: '<path fill="currentColor" d="M15 16h-2V8h2m-4 8H9V8h2m1-6A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2Z"/>',
    },
    'check-circle-outline': {
      body: '<path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4l8-8l-1.41-1.42Z"/>',
    },
    cancel: {
      body: '<path fill="currentColor" d="M12 2c5.5 0 10 4.5 10 10s-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2m0 2c-1.9 0-3.6.6-4.9 1.7l11.2 11.2c1-1.4 1.7-3.1 1.7-4.9c0-4.4-3.6-8-8-8m4.9 14.3L5.7 7.1C4.6 8.4 4 10.1 4 12c0 4.4 3.6 8 8 8c1.9 0 3.6-.6 4.9-1.7Z"/>',
    },
    'delete-variant': {
      body: '<path fill="currentColor" d="M21.03 3L18 20.31c-.17.96-1 1.69-2 1.69H8c-1 0-1.83-.73-2-1.69L2.97 3h18.06M5.36 5L8 20h8l2.64-15H5.36M9 18v-4h4v4H9m4-4.82L9.82 10L13 6.82L16.18 10L13 13.18Z"/>',
    },
    penguin: {
      body: '<path fill="currentColor" d="M19 16c0 1.72-.63 3.3-1.66 4.5c.41.39.66.91.66 1.5H6c0-.59.25-1.11.66-1.5A6.902 6.902 0 0 1 5 16H3c0-1.25.57-2.36 1.46-3.09l.01-.02A6.004 6.004 0 0 0 7 8V7a5 5 0 0 1 5-5a5 5 0 0 1 5 5v1c0 2 1 3.81 2.53 4.89l.01.02c.89.73 1.46 1.84 1.46 3.09h-2m-3 0a4 4 0 0 0-4-4a4 4 0 0 0-4 4a4 4 0 0 0 4 4a4 4 0 0 0 4-4m-6-7l2 1.5L14 9l-2-1.5L10 9m0-4a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1m4 0a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1Z"/>',
    },
    connection: {
      body: '<path fill="currentColor" d="M21.4 7.5c.8.8.8 2.1 0 2.8l-2.8 2.8l-7.8-7.8l2.8-2.8c.8-.8 2.1-.8 2.8 0l1.8 1.8l3-3l1.4 1.4l-3 3l1.8 1.8m-5.8 5.8l-1.4-1.4l-2.8 2.8l-2.1-2.1l2.8-2.8l-1.4-1.4l-2.8 2.8l-1.5-1.4l-2.8 2.8c-.8.8-.8 2.1 0 2.8l1.8 1.8l-4 4l1.4 1.4l4-4l1.8 1.8c.8.8 2.1.8 2.8 0l2.8-2.8l-1.4-1.4l2.8-2.9Z"/>',
    },
    'open-in-new': {
      body: '<path fill="currentColor" d="M14 3v2h3.59l-9.83 9.83l1.41 1.41L19 6.41V10h2V3m-2 16H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7h-2v7Z"/>',
    },
    backburger: {
      body: '<path fill="currentColor" d="m5 13l4 4l-1.4 1.42L1.18 12L7.6 5.58L9 7l-4 4h16v2H5m16-7v2H11V6h10m0 10v2H11v-2h10Z"/>',
    },
    menu: {
      body: '<path fill="currentColor" d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"/>',
    },
    'plus-box-outline': {
      body: '<path fill="currentColor" d="M19 19V5H5v14h14m0-16a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-8 4h2v4h4v2h-4v4h-2v-4H7v-2h4V7Z"/>',
    },
    'chevron-left-box-outline': {
      body: '<path fill="currentColor" d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.11 0 2-.89 2-2V5a2 2 0 0 0-2-2m0 16H5V5h14v14M15.71 7.41L11.12 12l4.59 4.59L14.29 18l-6-6l6-6l1.42 1.41Z"/>',
    },
    'chevron-right-box-outline': {
      body: '<path fill="currentColor" d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.11 0 2-.89 2-2V5a2 2 0 0 0-2-2m0 16H5V5h14v14M8.29 16.59L12.88 12L8.29 7.41L9.71 6l6 6l-6 6l-1.42-1.41Z"/>',
    },
    'comment-quote': {
      body: '<path fill="currentColor" d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4v3c0 .6.4 1 1 1h.5c.2 0 .5-.1.7-.3l3.7-3.7H20c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-9 11H7V8.8L8.3 6h2L8.9 9H11v4m6 0h-4V8.8L14.3 6h2l-1.4 3H17v4Z"/>',
    },
    pause: {
      body: '<path fill="currentColor" d="M14 19h4V5h-4M6 19h4V5H6v14Z"/>',
    },
    'desktop-classic': {
      body: '<path fill="currentColor" d="M6 2c-1.11 0-2 .89-2 2v8c0 1.11.89 2 2 2h12c1.11 0 2-.89 2-2V4c0-1.11-.89-2-2-2H6m0 2h12v8H6V4M4 15c-1.11 0-2 .89-2 2v3c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2v-3c0-1.11-.89-2-2-2H4m4 2h12v3H8v-3m1 .75v1.5h4v-1.5H9m6 0v1.5h4v-1.5h-4Z"/>',
    },
    linux: {
      body: '<path fill="currentColor" d="M14.62 8.35c-.42.28-1.75 1.04-1.95 1.19c-.39.31-.75.29-1.14-.01c-.2-.16-1.53-.92-1.95-1.19c-.48-.31-.45-.7.08-.92c1.64-.69 3.28-.64 4.91.03c.49.21.51.6.05.9m7.22 7.28c-.93-2.09-2.2-3.99-3.84-5.66a4.31 4.31 0 0 1-1.06-1.88c-.1-.33-.17-.67-.24-1.01c-.2-.88-.29-1.78-.7-2.61c-.73-1.58-2-2.4-3.84-2.47c-1.81.05-3.16.81-3.95 2.4c-.21.43-.36.88-.46 1.34c-.17.76-.32 1.55-.5 2.32c-.15.65-.45 1.21-.96 1.71c-1.61 1.57-2.9 3.37-3.88 5.35c-.14.29-.28.58-.37.88c-.19.66.29 1.12.99.96c.44-.09.88-.18 1.3-.31c.41-.15.57-.05.67.35c.65 2.15 2.07 3.66 4.24 4.5c4.12 1.56 8.93-.66 9.97-4.58c.07-.27.17-.37.47-.27c.46.14.93.24 1.4.35c.49.09.85-.16.92-.64c.03-.26-.06-.49-.16-.73"/>',
    },
    'microsoft-windows': {
      body: '<path fill="currentColor" d="M3 12V6.75l6-1.32v6.48L3 12m17-9v8.75l-10 .15V5.21L20 3M3 13l6 .09v6.81l-6-1.15V13m17 .25V22l-10-1.91V13.1l10 .15Z"/',
    },
    nut: {
      body: '<path fill="currentColor" d="M21 16.5c0 .38-.21.71-.53.88l-7.9 4.44c-.16.12-.36.18-.57.18c-.21 0-.41-.06-.57-.18l-7.9-4.44A.991.991 0 0 1 3 16.5v-9c0-.38.21-.71.53-.88l7.9-4.44c.16-.12.36-.18.57-.18c.21 0 .41.06.57.18l7.9 4.44c.32.17.53.5.53.88v9M12 7a5 5 0 0 0-5 5a5 5 0 0 0 5 5a5 5 0 0 0 5-5a5 5 0 0 0-5-5Z"/>',
    },
    'train-car-container': {
      body: '<path fill="currentColor" d="M1 6v11h1a2 2 0 1 0 4 0h12a2 2 0 1 0 4 0h1V6H1m20 9h-2V9h-2v6h-2V9h-2v6h-2V9H9v6H7V9H5v6H3V8h18v7Z"/>',
    },
    star: {
      body: '<path fill="currentColor" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2L9.19 8.62L2 9.24l5.45 4.73L5.82 21z"/>',
    },
  },
  aliases: {
    'more-vert': {
      parent: 'dots-vertical',
    },
    add: {
      parent: 'plus',
    },
    'check-box-outline': {
      parent: 'checkbox-outline',
    },
    search: {
      parent: 'magnify',
    },
    'file-document-box-outline': { parent: 'text-box-outline' },
  },
  lastModified: 1661493445,
  width: 24,
  height: 24,
  not_found: ['pauseIcon'],
};

// Load icons
addCollection(mdiIcons);

export default mdiIcons;

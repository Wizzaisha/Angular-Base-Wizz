import {
  ApplicationConfig,
  provideZoneChangeDetection,
  isDevMode,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import StylePreset from './shared/style-presets/style-preset';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { metaReducers, reducers } from './shared/store/app.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore(reducers, { metaReducers: metaReducers }),
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: StylePreset,
        options: {
          darkModeSelector: '.my-app-dark',
        },
      },
    }),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
  ],
};

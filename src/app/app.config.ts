import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import StylePreset from './shared/style-presets/style-preset';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore(),
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: StylePreset,
        options: {
          darkModeSelector: '.my-app-dark',
        },
      },
    }),
  ],
};

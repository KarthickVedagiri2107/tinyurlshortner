import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
//import { ApplicationConfig } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';




import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideHttpClient(),  // 😊 this makes HttpClient injectable everywhere
  ]
};

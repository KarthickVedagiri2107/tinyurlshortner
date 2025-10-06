import 'zone.js'; // ✅ Required for Angular's change detection system
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';

// importProvidersFrom can be used if you want to add FormsModule or other NgModules
import { importProvidersFrom } from '@angular/core';
import { FormsModule } from '@angular/forms';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter(routes),        // <== pass routes here!
    // importProvidersFrom(FormsModule), // uncomment if using forms in standalone components
  ]
}).catch(err => console.error(err));

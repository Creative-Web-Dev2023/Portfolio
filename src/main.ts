import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';

import { appConfig } from './app/app.config';
import { routes } from './app/app.routes';

import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [appConfig.providers, provideRouter(routes)],
}).catch((err) => console.error(err));

document.documentElement.setAttribute('data-theme', 'coral'); // z.B. Koralle als Start

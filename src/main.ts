import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';

import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

  document.documentElement.setAttribute('data-theme', 'coral'); // z.B. Koralle als Start

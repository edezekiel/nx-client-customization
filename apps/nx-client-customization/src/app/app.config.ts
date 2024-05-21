import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { CLIENT_CONFIG } from '../configurations/client.configuration.type';
import { clientConfiguration } from '../configurations/client.configuration';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes),
    { provide: CLIENT_CONFIG, useValue: clientConfiguration },
  ],
};

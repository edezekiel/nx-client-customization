import { InjectionToken } from '@angular/core';

export type ClientConfiguration = {
  clientName: string;
  address: string;
  isRetailBank: boolean;
}

export const CLIENT_CONFIG: InjectionToken<ClientConfiguration> = new InjectionToken('CLIENT_CONFIG');
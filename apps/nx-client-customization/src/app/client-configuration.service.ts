import { Injectable, inject } from '@angular/core';
import {
  CLIENT_CONFIG,
  ClientConfiguration,
} from '../configurations/client.configuration.type';

@Injectable({
  providedIn: 'root',
})
export class ClientConfigurationService {
  readonly config = inject<ClientConfiguration>(CLIENT_CONFIG);
}

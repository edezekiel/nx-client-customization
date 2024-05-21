import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientConfigurationService } from './client-configuration.service';

@Component({
  selector: 'app-nx-welcome',
  standalone: true,
  imports: [CommonModule],
  template: `<div class="container">
    <h1>Hello {{ config.clientName }} </h1>
    <div>
      <button type="button" class="btn btn-primary">Primary</button>
      <button type="button" class="btn btn-secondary">Secondary</button>
      <button type="button" class="btn btn-success">Success</button>
      <button type="button" class="btn btn-danger">Danger</button>
      <button type="button" class="btn btn-warning">Warning</button>
      <button type="button" class="btn btn-info">Info</button>
      <button type="button" class="btn btn-light">Light</button>
      <button type="button" class="btn btn-dark">Dark</button>

      <button type="button" class="btn btn-link">Link</button>
    </div>
  </div>`,
  styles: [],
})
export class NxWelcomeComponent {
  config = inject(ClientConfigurationService).config;
}

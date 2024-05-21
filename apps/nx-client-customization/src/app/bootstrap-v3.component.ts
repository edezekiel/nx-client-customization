import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bootstrap-v3',
  standalone: true,
  imports: [CommonModule],
  template: `<div class="container">
    <h1>Hello World - Bootstrap v3 </h1>
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
export class BootstrapV3Component {}

import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { BootstrapV3Component } from './bootstrap-v3.component';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, BootstrapV3Component],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'nx-client-customization';
}

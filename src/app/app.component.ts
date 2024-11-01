import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainBannerComponent } from './main-banner/main-banner.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
            MainBannerComponent,
            DashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'workstation-app';
}

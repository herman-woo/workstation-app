import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainBannerComponent } from './main-banner/main-banner.component';
import { DashboardComponent } from './content/dashboard/dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,
            RouterOutlet,
            MainBannerComponent,
            SidebarComponent,
            DashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'workstation-app';
  sidebarExpanded  = false;
  toggleSidebar() {
    this.sidebarExpanded = !this.sidebarExpanded;
  }

  onSidebarToggled(expanded: boolean) {
    this.sidebarExpanded = expanded;
  }
}

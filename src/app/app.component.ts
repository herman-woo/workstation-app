import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainBannerComponent } from './components/main-banner/main-banner.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CommonModule } from '@angular/common';
import { SidebarService } from '../services/sidebar.service';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SidenavComponent } from './layout/sidenav/sidenav.component';
import { NavbarComponent } from './layout/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MainBannerComponent,
    SidebarComponent, 
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
    NavbarComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'] // corrected from `styleUrl`
})
export class AppComponent implements OnInit {
  title = 'workstation-app';
  sidebarExpanded = true; // Initial default

  constructor(private sidebarService: SidebarService) {}

  ngOnInit(): void {
    // Sync sidebar state on load
    this.sidebarService.sidebarVisible$.subscribe(isVisible => {
      this.sidebarExpanded = isVisible;
    });
  }

  toggleSidebar() {
    this.sidebarExpanded = !this.sidebarExpanded;
    this.sidebarService.setSidebarVisibility(this.sidebarExpanded); // Update service state
  }

  onSidebarToggled(expanded: boolean) {
    this.sidebarExpanded = expanded;
  }
}

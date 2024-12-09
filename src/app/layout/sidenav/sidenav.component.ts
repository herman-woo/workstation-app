import { CommonModule } from '@angular/common';
import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { navItems } from './_navItems';
import { RouterLink } from '@angular/router';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatExpansionModule } from '@angular/material/expansion';
import { SidenavService } from '../../services/sidenav.service';


@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [
    CommonModule,
    MatSidenavModule, 
    MatListModule, 
    MatIconModule,
    RouterLink,
    MatTooltipModule,
    MatExpansionModule
  ],
  encapsulation: ViewEncapsulation.None,
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {
  navItems = navItems; // Navigation items
  activeMenuIndex: number | null = null; // Active menu state
  isSidebarActive: boolean = false; // Sidebar toggle state

  // Toggles the active menu item
  toggleMenu(index: number,  event: Event): void {
    event.stopPropagation();
    this.activeMenuIndex = this.activeMenuIndex === index ? null : index;
  }

  // Toggles the sidebar visibility
  toggleSidebar(): void {
    this.isSidebarActive = !this.isSidebarActive;
  }

  setActiveMenu(index: number): void {
    this.activeMenuIndex = index;
  }
  
  toggleSubMenu(index: number, event: Event): void {
    event.stopPropagation();
    this.activeMenuIndex = this.activeMenuIndex === index ? null : index;
  }
}
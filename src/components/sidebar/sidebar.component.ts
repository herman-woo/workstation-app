import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';

import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  isExpanded = false; // Local state is initially contracted
  
  @Output() sidebarToggled = new EventEmitter<boolean>();

  constructor(private sidebarService: SidebarService) {
    // Subscribe to the sidebar visibility from the service
    this.sidebarService.sidebarVisible$.subscribe(isVisible => {
      this.isExpanded = isVisible;
    });
  }

  toggleSidebar() {
    this.isExpanded = !this.isExpanded; // Toggle the state
    this.sidebarService.setSidebarVisibility(this.isExpanded); // Update service state
    this.sidebarToggled.emit(this.isExpanded); // Emit true when expanded, false when contracted
  }
}

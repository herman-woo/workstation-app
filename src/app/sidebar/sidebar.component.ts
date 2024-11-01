import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  isExpanded = false; // Sidebar is initially contracted
  @Output() sidebarToggled = new EventEmitter<boolean>();
  toggleSidebar() {
    this.isExpanded = !this.isExpanded; // Toggle the state
    this.sidebarToggled.emit(this.isExpanded); // Emit true when expanded, false when contracted

  }
}

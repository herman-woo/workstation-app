import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'assignments-section-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './assignments-section-card.component.html',
  styleUrl: './assignments-section-card.component.scss'
})
export class AssignmentsSectionCardComponent {

  activeTab: number = 1;
  setActiveTab(tabNumber: number) {
    this.activeTab = tabNumber
  }

}

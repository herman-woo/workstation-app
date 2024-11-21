import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'auditing-checklist-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './auditing-checklist-card.component.html',
  styleUrl: './auditing-checklist-card.component.css'
})
export class AuditingChecklistCardComponent {
  // Checklist items
  checklistItems = [
    { name: 'REQ: Submission Materials', checked: true },
    { name: 'REQ: Loss Runs', checked: true },
    { name: 'REQ: Application', checked: false },
    { name: 'REQ: Bind Email', checked: false },
    { name: 'REQ: Policy Email', checked: false },
    { name: 'REQ: Env. Reports/Other Docs.', checked: false },
    { name: 'REQ: UW Notes', checked: false },
    { name: 'REQ: UW Notes - 2nd Signature', checked: false },
    { name: 'REQ: Final Rating (incl. rate change)', checked: false }

  ];

  // Toggle the checked state
  toggleChecked(index: number) {
    this.checklistItems[index].checked = !this.checklistItems[index].checked;
  }
}

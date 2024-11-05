import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'auditing-checklist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './auditing-checklist.component.html',
  styleUrl: './auditing-checklist.component.css'
})
export class AuditingChecklistComponent {
  // Checklist items
  checklistItems = [
    { name: 'REQ: Sub. Materials', checked: false },
    { name: 'REQ: Loss Runs', checked: false },
    { name: 'REQ: Application', checked: false },
    { name: 'REQ: Bind Email', checked: false },
    { name: 'REQ: Policy Email', checked: false },
    { name: 'REQ: Env. Reports/Other Docs.', checked: false }
  ];

  // Toggle the checked state
  toggleChecked(index: number) {
    this.checklistItems[index].checked = !this.checklistItems[index].checked;
  }
}

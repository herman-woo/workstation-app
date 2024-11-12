import { Component, Input } from '@angular/core';

@Component({
  selector: 'account-notes',
  standalone: true,
  imports: [],
  templateUrl: './account-notes.component.html',
  styleUrl: './account-notes.component.css'
})
export class AccountNotesComponent {
  @Input() data: any;
}

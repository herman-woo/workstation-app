import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as accounts from "../accounts.json"

@Component({
  selector: 'app-accounts-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './accounts-table.component.html',
  styleUrl: './accounts-table.component.css'
})
export class AccountsTableComponent {
  tasks = accounts.tasks
}

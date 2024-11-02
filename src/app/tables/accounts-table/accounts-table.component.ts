import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as data from "../../../../data/models/accounts.json"
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-accounts-table',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './accounts-table.component.html',
  styleUrl: './accounts-table.component.css'
})
export class AccountsTableComponent {
  accounts = data.accounts
}

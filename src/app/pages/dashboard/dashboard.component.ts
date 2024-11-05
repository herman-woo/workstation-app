import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionItemComponent } from './dashboard-items/action-item/action-item.component';
import * as actions from "./dashboard-items/action-item/UnderwriterActions.json"
import { AccountsTableComponent } from '../../tables/accounts-table/accounts-table.component';

@Component({
  selector: 'dashboard',
  standalone: true,
  imports: [CommonModule, ActionItemComponent, AccountsTableComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  underwriterActions = actions['underwriter actions']
}

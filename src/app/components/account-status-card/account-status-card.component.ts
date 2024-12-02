import { Component, Input } from '@angular/core';

@Component({
  selector: 'account-status-card',
  standalone: true,
  imports: [],
  templateUrl: './account-status-card.component.html',
  styleUrl: './account-status-card.component.scss'
})
export class AccountSummaryCardComponent {

  @Input() accountData: any;

}

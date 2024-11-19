import { Component, Input } from '@angular/core';

@Component({
  selector: 'account-summary-card',
  standalone: true,
  imports: [],
  templateUrl: './account-summary-card.component.html',
  styleUrl: './account-summary-card.component.css'
})
export class AccountSummaryCardComponent {

  @Input() accountData: any;

}

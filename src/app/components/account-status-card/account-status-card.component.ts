import { Component, Input } from '@angular/core';
import { AccountTimelineCardComponent } from '../account-timeline-card/account-timeline-card.component';

@Component({
  selector: 'account-status-card',
  standalone: true,
  imports: [AccountTimelineCardComponent],
  templateUrl: './account-status-card.component.html',
  styleUrl: './account-status-card.component.scss'
})
export class AccountStatusCardComponent {

  @Input() accountData: any;

}

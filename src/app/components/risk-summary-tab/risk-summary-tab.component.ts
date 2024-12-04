import { Component, Input } from '@angular/core';
import { AccountTimelineCardComponent } from '../account-timeline-card/account-timeline-card.component';
@Component({
  selector: 'risk-summary',
  standalone: true,
  imports: [AccountTimelineCardComponent],
  templateUrl: './risk-summary-tab.component.html',
  styleUrl: './risk-summary-tab.component.scss'
})
export class RiskSummaryTabComponent {

  @Input() data: any;

}

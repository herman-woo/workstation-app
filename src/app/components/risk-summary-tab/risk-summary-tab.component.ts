import { Component, Input } from '@angular/core';
import { AccountTimelineCardComponent } from '../account-timeline-card/account-timeline-card.component';
import { AccountProductCardComponent } from '../account-product-card/account-product-card.component';
@Component({
  selector: 'risk-summary',
  standalone: true,
  imports: [AccountTimelineCardComponent,
            AccountProductCardComponent],
  templateUrl: './risk-summary-tab.component.html',
  styleUrl: './risk-summary-tab.component.scss'
})
export class RiskSummaryTabComponent {

  @Input() data: any;

}

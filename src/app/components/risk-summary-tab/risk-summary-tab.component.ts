import { Component, Input } from '@angular/core';
import { NamedInsuredCardComponent } from '../named-insured-card/named-insured-card.component';
import { AccountSummaryCardComponent } from '../account-summary-card/account-summary-card.component';
import { AccountTimelineCardComponent } from '../account-timeline-card/account-timeline-card.component';
import { AccountProductCardComponent } from '../account-product-card/account-product-card.component';
@Component({
  selector: 'risk-summary',
  standalone: true,
  imports: [NamedInsuredCardComponent,
            AccountSummaryCardComponent,
            AccountTimelineCardComponent,
            AccountProductCardComponent],
  templateUrl: './risk-summary-tab.component.html',
  styleUrl: './risk-summary-tab.component.scss'
})
export class RiskSummaryTabComponent {

  @Input() data: any;

}

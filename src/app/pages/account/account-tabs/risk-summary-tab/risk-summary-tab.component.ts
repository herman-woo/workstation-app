import { Component, Input } from '@angular/core';
import { NamedInsuredCardComponent } from '../../../../components/named-insured-card/named-insured-card.component';
import { AccountSummaryCardComponent } from '../../../../components/account-summary-card/account-summary-card.component';
import { AccountTimelineCardComponent } from '../../../../components/account-timeline-card/account-timeline-card.component';
import { AccountProductCardComponent } from '../../../../components/account-product-card/account-product-card.component';
@Component({
  selector: 'risk-summary',
  standalone: true,
  imports: [NamedInsuredCardComponent,
            AccountSummaryCardComponent,
            AccountTimelineCardComponent,
            AccountProductCardComponent],
  templateUrl: './risk-summary-tab.component.html',
  styleUrl: './risk-summary-tab.component.css'
})
export class RiskSummaryTabComponent {

  @Input() data: any;

}

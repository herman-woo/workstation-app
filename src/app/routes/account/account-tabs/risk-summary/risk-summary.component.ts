import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UnderwriterCardComponent } from '../../../../components/cards/underwriter-card/underwriter-card.component';
import { NamedInsuredCardComponent } from '../../../../components/cards/named-insured-card/named-insured-card.component';
import { AccountSummaryCardComponent } from '../../../../components/cards/account-summary-card/account-summary-card.component';
import { AccountTimelineCardComponent } from '../../../../components/cards/account-timeline-card/account-timeline-card.component';
import { AccountProductCardComponent } from '../../../../components/cards/account-product-card/account-product-card.component';
@Component({
  selector: 'risk-summary',
  standalone: true,
  imports: [RouterLink,
            UnderwriterCardComponent,
            NamedInsuredCardComponent,
            AccountSummaryCardComponent,
            AccountTimelineCardComponent,
            AccountProductCardComponent],
  templateUrl: './risk-summary.component.html',
  styleUrl: './risk-summary.component.css'
})
export class RiskSummaryComponent {

  @Input() data: any;

}

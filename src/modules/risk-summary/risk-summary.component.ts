import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UnderwriterCardComponent } from '../module-components/underwriter-card/underwriter-card.component';
import { NamedInsuredCardComponent } from '../module-components/named-insured-card/named-insured-card.component';
import { AccountSummaryCardComponent } from '../module-components/account-summary-card/account-summary-card.component';
import { AccountTimelineCardComponent } from '../module-components/account-timeline-card/account-timeline-card.component';

@Component({
  selector: 'risk-summary',
  standalone: true,
  imports: [RouterLink,
            UnderwriterCardComponent,
            NamedInsuredCardComponent,
            AccountSummaryCardComponent,
            AccountTimelineCardComponent],
  templateUrl: './risk-summary.component.html',
  styleUrl: './risk-summary.component.css'
})
export class RiskSummaryComponent {

  @Input() data: any;

}

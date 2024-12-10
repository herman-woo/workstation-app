import { Component, Input } from '@angular/core';
import { CommentsSectionCardComponent } from '../comments-section-card/comments-section-card.component';
@Component({
  selector: 'risk-summary',
  standalone: true,
  imports: [CommentsSectionCardComponent],
  templateUrl: './risk-summary-tab.component.html',
  styleUrl: './risk-summary-tab.component.scss'
})
export class RiskSummaryTabComponent {

  @Input() data: any;

}

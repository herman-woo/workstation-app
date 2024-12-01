import { Component, Input } from '@angular/core';
import { RatingModuleCardComponent } from '../../../../components/rating-module-card/rating-module-card.component';
import { QuotingModuleCardComponent } from '../../../../components/quoting-module-card/quoting-module-card.component';
import { PolicyModuleCardComponent } from '../../../../components/policy-module-card/policy-module-card.component';
@Component({
  selector: 'rating-quoting',
  standalone: true,
  imports: [RatingModuleCardComponent,
            QuotingModuleCardComponent,
            PolicyModuleCardComponent
  ],
  templateUrl: './rating-quoting-tab.component.html',
  styleUrl: './rating-quoting-tab.component.css'
})
export class RatingQuotingTabComponent {
  @Input() data: any;
}

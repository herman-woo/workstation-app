import { Component, Input } from '@angular/core';
import { RatingModuleCardComponent } from '../module-components/rating-module-card/rating-module-card.component';
import { QuotingModuleCardComponent } from '../module-components/quoting-module-card/quoting-module-card.component';

@Component({
  selector: 'rating-quoting',
  standalone: true,
  imports: [RatingModuleCardComponent,
            QuotingModuleCardComponent
  ],
  templateUrl: './rating-quoting.component.html',
  styleUrl: './rating-quoting.component.css'
})
export class RatingQuotingComponent {
  @Input() data: any;
}

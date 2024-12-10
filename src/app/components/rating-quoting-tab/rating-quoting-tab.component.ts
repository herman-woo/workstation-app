import { Component, Input } from '@angular/core';
import { RatingModuleCardComponent } from '../rating-module-card/rating-module-card.component';
import { QuotingModuleCardComponent } from '../quoting-module-card/quoting-module-card.component';
import { PolicyModuleCardComponent } from '../policy-module-card/policy-module-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'rating-quoting',
  standalone: true,
  imports: [RatingModuleCardComponent,
            QuotingModuleCardComponent,
            PolicyModuleCardComponent,
            CommonModule
  ],
  templateUrl: './rating-quoting-tab.component.html',
  styleUrl: './rating-quoting-tab.component.scss'
})
export class RatingQuotingTabComponent {
  @Input() data: any;
}

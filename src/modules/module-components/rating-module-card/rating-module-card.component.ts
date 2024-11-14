import { Component, Input } from '@angular/core';

@Component({
  selector: 'rating-module-card',
  standalone: true,
  imports: [],
  templateUrl: './rating-module-card.component.html',
  styleUrl: './rating-module-card.component.css'
})
export class RatingModuleCardComponent {

  @Input() accountData: any;

}

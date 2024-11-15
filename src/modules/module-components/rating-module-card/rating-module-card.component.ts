import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'rating-module-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rating-module-card.component.html',
  styleUrl: './rating-module-card.component.css'
})
export class RatingModuleCardComponent {

  @Input() accountData: any;

}

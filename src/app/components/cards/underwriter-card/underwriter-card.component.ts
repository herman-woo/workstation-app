import { Component, Input } from '@angular/core';

@Component({
  selector: 'underwriter-card',
  standalone: true,
  imports: [],
  templateUrl: './underwriter-card.component.html',
  styleUrl: './underwriter-card.component.css'
})
export class UnderwriterCardComponent {

  @Input() underwriter: any;
}

import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'underwriter-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './underwriter-card.component.html',
  styleUrl: './underwriter-card.component.scss'
})
export class UnderwriterCardComponent {
  @Input() underwriter: any;
  @Input() underwriterId: number;
}

import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UnderwriterCardComponent } from '../underwriter-card/underwriter-card.component';

@Component({
  selector: 'named-insured-card',
  standalone: true,
  imports: [RouterLink,UnderwriterCardComponent],
  templateUrl: './named-insured-card.component.html',
  styleUrl: './named-insured-card.component.css'
})
export class NamedInsuredCardComponent {
@Input() data: any;
}

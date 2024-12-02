import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UnderwriterCardComponent } from '../underwriter-card/underwriter-card.component';
import { BrokerCardComponent } from '../broker-card/broker-card.component';
import { BrokerageCardComponent } from '../brokerage-card/brokerage-card.component';

@Component({
  selector: 'named-insured-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './named-insured-card.component.html',
  styleUrl: './named-insured-card.component.scss'
})
export class NamedInsuredCardComponent {
  @Input() namedInsured: any;
  @Input() namedInsuredId: number;
}

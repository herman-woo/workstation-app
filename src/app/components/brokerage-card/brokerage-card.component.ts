import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'brokerage-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './brokerage-card.component.html',
  styleUrl: './brokerage-card.component.scss'
})
export class BrokerageCardComponent {
  @Input() brokerage: any;
  @Input() brokerageId: number;
}

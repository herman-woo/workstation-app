import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'broker-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './broker-card.component.html',
  styleUrl: './broker-card.component.scss'
})
export class BrokerCardComponent {
  @Input() broker: any;
  @Input() brokerId: number;
}

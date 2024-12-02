import { Component, Input } from '@angular/core';
import { UnderwriterCardComponent } from '../underwriter-card/underwriter-card.component';
import { BrokerCardComponent } from '../broker-card/broker-card.component';
import { BrokerageCardComponent } from '../brokerage-card/brokerage-card.component';
import { NamedInsuredCardComponent } from '../named-insured-card/named-insured-card.component';

@Component({
  selector: 'account-entities',
  standalone: true,
  imports: [NamedInsuredCardComponent, UnderwriterCardComponent, BrokerCardComponent, BrokerageCardComponent],
  templateUrl: './account-entities.component.html',
  styleUrl: './account-entities.component.scss'
})
export class AccountEntitiesComponent {
  @Input() data: any;
}

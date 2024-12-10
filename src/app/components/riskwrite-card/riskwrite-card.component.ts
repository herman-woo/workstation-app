import { Component,Input } from '@angular/core';

@Component({
  selector: 'riskwrite-card',
  standalone: true,
  imports: [],
  templateUrl: './riskwrite-card.component.html',
  styleUrl: './riskwrite-card.component.scss'
})
export class RiskwriteCardComponent {
  @Input() accountData: any;

}

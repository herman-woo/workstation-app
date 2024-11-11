import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'risk-summary',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './risk-summary.component.html',
  styleUrl: './risk-summary.component.css'
})
export class RiskSummaryComponent {

  @Input() data: any;

}

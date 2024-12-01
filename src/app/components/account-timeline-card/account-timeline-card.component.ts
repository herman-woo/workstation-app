import { Component , Input} from '@angular/core';

@Component({
  selector: 'account-timeline-card',
  standalone: true,
  imports: [],
  templateUrl: './account-timeline-card.component.html',
  styleUrl: './account-timeline-card.component.scss'
})
export class AccountTimelineCardComponent {
  @Input() accountData: any;
}

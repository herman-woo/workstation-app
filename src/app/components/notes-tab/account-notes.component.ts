import { Component, Input } from '@angular/core';
import { HistorySectionCardComponent } from '../history-section-card/history-section-card.component';
import { CommentsSectionCardComponent } from '../comments-section-card/comments-section-card.component';
import { AssignmentsSectionCardComponent } from '../assignments-section-card/assignments-section-card.component';

@Component({
  selector: 'account-notes',
  standalone: true,
  imports: [HistorySectionCardComponent,
    CommentsSectionCardComponent,
    AssignmentsSectionCardComponent
  ],
  templateUrl: './account-notes.component.html',
  styleUrl: './account-notes.component.scss'
})
export class AccountNotesComponent {
  @Input() data: any;
}

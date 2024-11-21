import { Component, Input } from '@angular/core';
import { HistorySectionCardComponent } from '../../../../components/cards/history-section-card/history-section-card.component';
import { CommentsSectionCardComponent } from '../../../../components/cards/comments-section-card/comments-section-card.component';
import { AssignmentsSectionCardComponent } from '../../../../components/cards/assignments-section-card/assignments-section-card.component';

@Component({
  selector: 'account-notes',
  standalone: true,
  imports: [HistorySectionCardComponent,
    CommentsSectionCardComponent,
    AssignmentsSectionCardComponent
  ],
  templateUrl: './account-notes.component.html',
  styleUrl: './account-notes.component.css'
})
export class AccountNotesComponent {
  @Input() data: any;
}

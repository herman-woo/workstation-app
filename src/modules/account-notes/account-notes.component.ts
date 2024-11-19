import { Component, Input } from '@angular/core';
import { HistorySectionCardComponent } from '../module-components/history-section-card/history-section-card.component';
import { CommentsSectionCardComponent } from '../module-components/comments-section-card/comments-section-card.component';
import { AssignmentsSectionCardComponent } from '../module-components/assignments-section-card/assignments-section-card.component';

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

import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, input } from '@angular/core';

import { uwActions } from '../hero-section/_uwAcions';
import { RouterLink } from '@angular/router';
import { Router} from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'underwriter-actions',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule    
  ],
  templateUrl: './underwriter-actions.component.html',
  styleUrl: './underwriter-actions.component.scss'
})
export class UnderwriterActionsComponent {
  uwActions= uwActions;
  action: string;
  @Output() actionClicked: EventEmitter<string> = new EventEmitter();  // this will notify the parent (event emitter), here the parent is dashboard component
  constructor (private router: Router){}

  setActiononClick(input:string){
    this.action = input
    this.onActionClick()
  }
  onActionClick(): void {

      if (this.action === 'Submission') {
        this.router.navigate(['/submission']); // Navigate to the "submission" page
      } else if (this.action === 'Renewal') {
        this.router.navigate(['/renewal']); // these actions are not used as of now 
      } else if (this.action === 'Rating') {
        this.router.navigate(['/rating']); 
      } else if (this.action === 'Quoting') {
        this.router.navigate(['/quoting']); 
      } else if (this.action === 'Binding') {
        this.router.navigate(['/binding']); 
      } else if (this.action === 'Search') {
        this.router.navigate(['/search']); 
      }
  }

}

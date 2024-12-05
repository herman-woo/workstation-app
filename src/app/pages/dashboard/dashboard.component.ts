import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionItemComponent } from '../../components/action-item/action-item.component';
import { ActivatedRoute,RouterLink } from '@angular/router';
import { AccountService } from '../../../services/account.service';
import * as actions from "../../components/action-item/UnderwriterActions.json";
import { FormsModule } from '@angular/forms';
import { Router} from '@angular/router'
import { WelcomeComponent } from '../../layout/welcome/welcome.component';
import { UnderwriterActionsComponent } from "../../layout/underwriter-actions/underwriter-actions.component";
import {MatTabsModule} from '@angular/material/tabs';
import { OverviewTabComponent } from '../../layout/overview-tab/overview-tab.component';



@Component({
  selector: 'dashboard',
  standalone: true,
  imports: [
    CommonModule, 
    ActionItemComponent, 
    RouterLink, 
    FormsModule, 
    WelcomeComponent, 
    UnderwriterActionsComponent,
    MatTabsModule,
    OverviewTabComponent

  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  accounts = []
  underwriterActions = actions['underwriter actions']
  insuredFilter: string; // Search query entered by the user
  isLoading: boolean = false; // Show a loading indicator during the API call

  lastUpdatedField: boolean = true;

  constructor(private route: ActivatedRoute,  private router: Router, 
    private accountService: AccountService) { }
    search(): void {
      if (!this.insuredFilter.trim()) {
        this.getAccounts("")
        return;
      }

      this.isLoading = true; // Start loading
      this.getAccounts(this.insuredFilter)
    }
    ngOnInit(): void {
      this.getAccounts("")
    }
  
    getAccounts(insured: string) {
      this.accountService.getAllAccounts(insured).subscribe({
        next: (response) => {
          console.log(response)
          this.accounts = response.accounts;
        },
        error: (error) => {
          console.error('Error fetching underwriters:', error);
        }
      })
    }

    // Handle action click and route based on the action
  onActionClicked(action: string): void {
    if (action === 'Submission') {
      this.router.navigate(['/submission']); // Navigate to the "submission" page
    } else if (action === 'Renewal') {
      this.router.navigate(['/renewal']); // these actions are not used as of now 
    } else if (action === 'Rating') {
      this.router.navigate(['/rating']); 
    } else if (action === 'Quoting') {
      this.router.navigate(['/quoting']); 
    } else if (action === 'Binding') {
      this.router.navigate(['/binding']); 
    } else if (action === 'Search') {
      this.router.navigate(['/search']); 
    }
  }

  
}

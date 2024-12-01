import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionItemComponent } from '../../components/common/action-item/action-item.component';
import { ActivatedRoute,RouterLink } from '@angular/router';
import { AccountService } from '../../../services/account.service';
import * as actions from "../../components/common/action-item/UnderwriterActions.json";

@Component({
  selector: 'dashboard',
  standalone: true,
  imports: [CommonModule, ActionItemComponent,RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  accounts = []
  underwriterActions = actions['underwriter actions']

  constructor(private route: ActivatedRoute,
    private accountService: AccountService) { }

    ngOnInit(): void {
      this.loadData()
    }
  
    loadData() {
      this.accountService.getAllAccounts(null).subscribe({
        next: (response) => {
          console.log(response)
          this.accounts = response.accounts;
        },
        error: (error) => {
          console.error('Error fetching underwriters:', error);
        }
      })
    }
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbComponent } from '../../components/breadcrumb/breadcrumb.component';
import { RiskSummaryTabComponent } from '../../components/risk-summary-tab/risk-summary-tab.component';
import { RatingQuotingTabComponent } from '../../components/rating-quoting-tab/rating-quoting-tab.component';
import { FileStructureComponent } from '../../components/file-structure-tab/file-structure.component';
import { AccountNotesComponent } from '../../components/notes-tab/account-notes.component';
import { AccountService } from '../../../services/account.service';
import { AccountEntitiesComponent } from '../account-entities/account-entities.component';
import { AccountStatusCardComponent } from '../account-status-card/account-status-card.component';
import { AccountActionCardComponent } from '../account-action-card/account-action-card.component';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [CommonModule,
    RiskSummaryTabComponent,
    RatingQuotingTabComponent,
    FileStructureComponent,
    AccountNotesComponent,
    BreadcrumbComponent,
    AccountEntitiesComponent,
    AccountStatusCardComponent,
    AccountActionCardComponent],
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss'
})
export class AccountComponent {

  //logic and variable for account page tabs
  activeTab: number = 2;
  setActiveTab(tabNumber: number) {
    this.activeTab = tabNumber
  }

  id: string | null = null;
  accountRecord = null


  constructor(private route: ActivatedRoute,
    private accountService: AccountService) { }

  ngOnInit(): void {
    // Capture the ID from the route
    this.id = this.route.snapshot.paramMap.get('id');

    //get account by ID from service
    this.accountService.getAccountById(parseInt(this.id!)).subscribe((data) => {
      console.log(data)
      this.accountRecord = data
    })
    console.log(this.accountRecord)
  }
}

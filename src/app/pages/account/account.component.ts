import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbComponent } from '../../components/breadcrumb/breadcrumb.component';
import { RiskSummaryTabComponent } from './account-tabs/risk-summary-tab/risk-summary-tab.component';
import { RatingQuotingTabComponent } from './account-tabs/rating-quoting-tab/rating-quoting-tab.component';
import { FileStructureComponent } from './account-tabs/file-structure-tab/file-structure.component';
import { AccountNotesComponent } from './account-tabs/notes-tab/account-notes.component';
import { AccountService } from '../../../services/account.service';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [CommonModule,
    RiskSummaryTabComponent,
    RatingQuotingTabComponent,
    FileStructureComponent,
    AccountNotesComponent,
    BreadcrumbComponent
  ],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent {

  //logic and variable for account page tabs
  activeTab: number = 1;
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

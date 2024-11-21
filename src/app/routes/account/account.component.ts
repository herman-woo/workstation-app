import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecordBreadcrumbComponent } from '../../components/record-items/record-breadcrumb/record-breadcrumb.component';
import { RiskSummaryComponent } from './account-tabs/risk-summary/risk-summary.component';
import { RatingQuotingComponent } from './account-tabs/rating-quoting/rating-quoting.component';
import { FileStructureComponent } from './account-tabs/file-structure/file-structure.component';
import { AccountNotesComponent } from './account-tabs/account-notes/account-notes.component';
import { AccountService } from '../../../services/account.service';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [CommonModule,
    RiskSummaryComponent,
    RatingQuotingComponent,
    FileStructureComponent,
    AccountNotesComponent,
    RecordBreadcrumbComponent
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
    this.accountService.getAccountById(parseInt(this.id!)).subscribe((data) => this.accountRecord = data)
  }
}

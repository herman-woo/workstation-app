import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecordBreadcrumbComponent } from '../record-items/record-breadcrumb/record-breadcrumb.component';
import { RiskSummaryComponent } from '../../../modules/risk-summary/risk-summary.component';
import { RatingQuotingComponent } from '../../../modules/rating-quoting/rating-quoting.component';
import { FileStructureComponent } from '../../../modules/file-structure/file-structure.component';
import { AccountNotesComponent } from '../../../modules/account-notes/account-notes.component';
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
  pdf = "/images/pdf-svgrepo-com.svg"
  doc = "/images/word.svg"
  exl = "/images/excel-svgrepo-com.svg"
  file = "/images/folder-files-and-folders-svgrepo-com.svg"


  constructor(private route: ActivatedRoute,
              private accountService: AccountService) { }

  ngOnInit(): void {
    // Capture the ID from the route
    this.id = this.route.snapshot.paramMap.get('id');

    //get account by ID from service
    this.accountService.getAccountById(parseInt(this.id!)).subscribe((data) => this.accountRecord = data)
  }
}

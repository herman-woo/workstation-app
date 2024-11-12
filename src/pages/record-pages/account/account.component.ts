import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterLink } from '@angular/router';
import * as accountData from '../../../../data/models/accounts.json'
import { AuditingChecklistComponent } from './account-components/auditing-checklist/auditing-checklist.component';
import { RecordBreadcrumbComponent } from '../record-items/record-breadcrumb/record-breadcrumb.component';

import { RiskSummaryComponent } from '../../../modules/risk-summary/risk-summary.component';
import { RatingQuotingComponent } from '../../../modules/rating-quoting/rating-quoting.component';
import { FileStructureComponent } from '../../../modules/file-structure/file-structure.component';
import { AccountNotesComponent } from '../../../modules/account-notes/account-notes.component';
import { AccountService } from '../../../services/account.service';


@Component({
  selector: 'app-account',
  standalone: true,
  imports: [CommonModule, AuditingChecklistComponent, RouterLink,
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

  data = {
    "id": "1",
    "underwriterId": 4,
    "policyId": "BC04123-2432",
    "insuredId": "1",
    "brokerId": "11",
    "brokerCompanyId": 8,
    "insured": "Bread Winner Inc.",
    "underwriter": "Herman Woo",
    "newOrRenewal": "Renewal",
    "product": "CPP",
    "status": "In Progress",
    "dateCreated": "2023-01-21",
    "lastUpdated": "2023-08-24"
  }

  activeTab: number = 1;

  setActiveTab(tabNumber: number) {
    this.activeTab = tabNumber
  }

  
  pdf = "/images/pdf-svgrepo-com.svg"
  doc = "/images/word.svg"
  exl = "/images/excel-svgrepo-com.svg"
  file = "/images/folder-files-and-folders-svgrepo-com.svg"

  id: string | null = null;
  insuredId: string = ""
  detailData: string | null = null;
  policyId: string = "";
  insured: string = "";
  underwriter: string = "";
  product: string = "";
  status: string = "";
  dateCreated: string = "";
  lastUpdated: string = "";
  newOrRenewal: string = "";

  //Broker info
  brokerId: string = ""
  brokerName: string = "";
  brokerTitle: string = "";
  brokerPhone: string = "";
  brokerEmail: string = "";

  //broker Company
  brokerCompanyName: string = ""
  brokerCompanyAddress: string = ""
  brokerCompanyCity: string = ""
  brokerCompanyPostalCode: string = ""


  submittedToRiskWrite = "Yes"
  submissionRecDate = "2024-10-01"
  firstIndicationOrQuoteDay = "2024-10-11"
  boundInRiskWrite = "2024-10-21"
  policyExpiration = "2027-10-31"

  subunit = "SME"
  insuranceProduct = "Fixed Site Environmental"

  accountRecord = null


  constructor(private route: ActivatedRoute,
              private accountService: AccountService) { }

  ngOnInit(): void {
    // Capture the ID from the route
    this.id = this.route.snapshot.paramMap.get('id');
    const account = (accountData as any).accounts.find((acc: any) => acc.id === this.id);
    this.insured = account.insured;
    this.policyId = account.policyId;
    this.underwriter = account.underwriter
    this.product = account.product
    this.status = account.status
    this.dateCreated = account.dateCreated
    this.lastUpdated = account.lastUpdated
    this.insuredId = account.insuredId
    this.newOrRenewal = account.newOrRenewal
    this.brokerId = account.brokerId
    
    
    this.accountService.getAccountById(parseInt(this.id!)).subscribe((data) => this.accountRecord = data)
    // const broker = (brokerData as any).brokers[this.brokerId!];
    // this.brokerName = broker.brokerFirstName + " " + broker.brokerLastName
    // this.brokerTitle = broker.brokerTitle
    // this.brokerPhone = broker.brokerPhone
    // this.brokerEmail = broker.brokerEmail

    // const company = (companyData as any).companies[broker.brokerCompanyId];
    // this.brokerCompanyName = company.brokerCompanyName
    // this.brokerCompanyAddress = company.Address
    // this.brokerCompanyCity = company.City
    // this.brokerCompanyPostalCode = company.PostalCode
  }
}

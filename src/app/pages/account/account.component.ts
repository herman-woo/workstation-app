import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as accountData from '../../../../data/models/accounts.json'
import { AuditingChecklistComponent } from './auditing-checklist/auditing-checklist.component';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [CommonModule, AuditingChecklistComponent],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent {

  pdf = "/images/pdf-svgrepo-com.svg"
  doc = "/images/word.svg"
  exl = "/images/excel-svgrepo-com.svg"
  file = "/images/folder-files-and-folders-svgrepo-com.svg"

  id: string | null = null;
  detailData: string | null = null;
  policyId: string = "";
  insured: string = "";
  underwriter: string = "";
  product: string = "";
  status: string = "";
  dateCreated: string = "";
  lastUpdated: string = "";

  //hardcoded
  //Broker info
  brokerName = "John Doe"
  brokerTitle = "Broker"
  brokerPhone = "416-999-1111"
  brokerEmail = "john.doe@broker4insured.com"

  brokerCompanyName = "Brokers4Insured"
  brokerCompanyAddress = "130 Brokers Ave"
  brokerCompanyCity = "Toronto, Ontario"
  brokerCompanyPostalCode = "RXE 1K2"


  newOrRenewal = "New"
  submittedToRiskWrite = "Yes"
  submissionRecDate = "2024-10-01"
  firstIndicationOrQuoteDay = "2024-10-11"
  boundInRiskWrite = "2024-10-21"
  policyExpiration = "2027-10-31"

  subunit = "SME"
  insuranceProduct = "Fixed Site Environmental"



  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Capture the ID from the route
    this.id = this.route.snapshot.paramMap.get('id');
    const account = (accountData as any).accounts.find((acc: any) => acc.id === this.id);
    this.policyId = account.policyId;
    this.insured = account.insured;
    this.underwriter = account.underwriter
    this.product = account.product
    this.status = account.status
    this.dateCreated = account.dateCreated
    this.lastUpdated = account.lastUpdated

  }
}

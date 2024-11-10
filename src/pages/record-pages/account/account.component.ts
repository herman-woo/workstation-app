import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterLink } from '@angular/router';
import * as accountData from '../../../../data/models/accounts.json'
import { AuditingChecklistComponent } from './account-components/auditing-checklist/auditing-checklist.component';



@Component({
  selector: 'app-account',
  standalone: true,
  imports: [CommonModule, AuditingChecklistComponent,RouterLink],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent {

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



  constructor(private route: ActivatedRoute) { }

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

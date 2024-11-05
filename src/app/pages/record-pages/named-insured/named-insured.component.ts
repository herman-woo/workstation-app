import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import * as data from '\../../../../../data/models/accounts.json'
import * as insuredData from '../../../../../data/models/named-insureds.json'
import { NamedInsuredTableComponent } from '../../../tables/named-insured-table/named-insured-table.component';
import { RecordHeaderComponent } from "../record-items/record-header/record-header.component";
import { RecordBreadcrumbComponent } from '../record-items/record-breadcrumb/record-breadcrumb.component';
import { TableComponent } from '../../../tools/table/table.component';

@Component({
  selector: 'app-named-insured',
  standalone: true,
  imports: [CommonModule, RecordBreadcrumbComponent, NamedInsuredTableComponent, RecordHeaderComponent, TableComponent],
  templateUrl: './named-insured.component.html',
  styleUrl: './named-insured.component.css'
})




export class NamedInsuredComponent {
  id: string | null = null;
  insuredName: string = "";
  insuredAddress: string = "";
  insuredProvince: string = "";
  pageSubject = "Named Insured"


  columnTitles = [
    "Created",
    "Policy ID",
    "Underwriter",
    "New/Renewal",
    "Product",
    "Status",
    "Related Project",
    "Last Updated",
  ]

  columnFields = [
    "dateCreated",
    "policyId",
    "underwriter",
    "newOrRenewal",
    "product",
    "status",
    "Related Project",
    "lastUpdated"
  ]

  rows: any[] = []




  constructor(private route: ActivatedRoute) { }
  ngOnInit(): void {
    // Capture the ID from the route
    this.id = this.route.snapshot.paramMap.get('id');
    const insured = (insuredData as any).namedInsureds.find((insured: any) => insured.id === this.id)
    this.insuredName = insured.insuredName
    this.insuredAddress = insured.address
    this.insuredProvince = insured.province

    for (let account of data.accounts) {
      if (account.insuredId == this.id) {
        this.rows.push(account)
      }
    }
  }

}

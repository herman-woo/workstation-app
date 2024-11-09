import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReferenceBannerComponent } from '../reference-page-items/reference-banner/reference-banner.component';
import { AccountsTableComponent } from "../../../tables/accounts-table/accounts-table.component";
import { CompanyComponent } from '../../record-pages/company/company.component';
import { RouterLink } from '@angular/router';
import * as brokerData from '../../../../../data/models/brokers.json'
import * as companyData from '../../../../../data/models/broker-companies.json'
import { SearchbarComponent } from '../../../tools/searchbar/searchbar.component';


@Component({
  selector: 'app-broker-companies-reference-page',
  standalone: true,
  imports: [CompanyComponent,
            CommonModule,
            ReferenceBannerComponent,
            AccountsTableComponent,
            SearchbarComponent,
            RouterLink],
  templateUrl: './broker-companies-reference-page.component.html',
  styleUrl: './broker-companies-reference-page.component.css'
})
export class BrokerCompaniesReferencePageComponent {
  title = "Broker Companies"
  brokers = brokerData.brokers
  companies = companyData.companies
}

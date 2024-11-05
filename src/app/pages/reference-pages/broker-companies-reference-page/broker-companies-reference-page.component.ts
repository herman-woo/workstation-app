import { Component } from '@angular/core';
import { ReferenceBannerComponent } from '../../../content/reference-pages/reference-page-items/reference-banner/reference-banner.component';
import { AccountsTableComponent } from "../../../tables/accounts-table/accounts-table.component";

@Component({
  selector: 'app-broker-companies-reference-page',
  standalone: true,
  imports: [ReferenceBannerComponent, AccountsTableComponent],
  templateUrl: './broker-companies-reference-page.component.html',
  styleUrl: './broker-companies-reference-page.component.css'
})
export class BrokerCompaniesReferencePageComponent {

  title = "Broker Companies"
}

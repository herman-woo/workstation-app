import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReferenceBannerComponent } from '../reference-page-items/reference-banner/reference-banner.component';
import { RouterLink } from '@angular/router';
import { SearchbarComponent } from '../../../tools/searchbar/searchbar.component';
import { BrokerCompanyService } from '../../../../services/broker-company.service';


@Component({
  selector: 'app-broker-companies-reference-page',
  standalone: true,
  imports: [CommonModule,
            ReferenceBannerComponent,
            SearchbarComponent,
            RouterLink],
  templateUrl: './broker-companies-reference-page.component.html',
  styleUrl: './broker-companies-reference-page.component.css'
})
export class BrokerCompaniesReferencePageComponent {
  title = "Broker Companies"
  companies: any[] = []

  constructor(private companyService: BrokerCompanyService) { }

  ngOnInit(): void {
    this.companyService.getAllBrokerCompanies().subscribe((data) => {
      this.companies = data
    })
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReferenceBannerComponent } from '../reference-page-items/reference-banner/reference-banner.component';
import { RouterLink } from '@angular/router';
import { SearchbarComponent } from '../../../components/tools/searchbar/searchbar.component';
import { BrokerCompanyService } from '../../../services/broker-company.service';


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
  query: string = ''; // Search query entered by the user
  isLoading: boolean = false; // Show a loading indicator during the API call

  constructor(private companyService: BrokerCompanyService) { }
  search(): void {
    if (!this.query.trim()) {
      this.companyService.getAllBrokerCompanies().subscribe((data) => {
        this.companies = data;
      })
      return;
    }

    this.isLoading = true; // Start loading
    this.companyService.searchInsuranceCompanies(this.query).subscribe(
      (data) => {
        this.companies = data; // Update the results with the API response
        this.isLoading = false; // Stop loading
      },
      (error) => {
        console.error('Error fetching search results:', error);
        this.isLoading = false; // Stop loading
      }
    );
  }

  ngOnInit(): void {
    this.companyService.getAllBrokerCompanies().subscribe((data) => {
      this.companies = data
    })
  }
}

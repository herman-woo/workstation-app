import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReferenceBannerComponent } from '../../../components/banners/reference-banner/reference-banner.component';
import { RouterLink } from '@angular/router';
import { BrokerCompanyService } from '../../../../services/broker-company.service';
import { FormsModule } from '@angular/forms';
import { BrokerCompany } from '../../../../models/broker-company.model';


@Component({
  selector: 'app-broker-companies-reference-page',
  standalone: true,
  imports: [CommonModule,
            ReferenceBannerComponent,
            RouterLink,
            FormsModule],
  templateUrl: './broker-companies-list.component.html',
  styleUrl: './broker-companies-list.component.css'
})
export class BrokerCompaniesListComponent {
  title = "Broker Companies"
  companies: BrokerCompany[] = []
  query: string = ''; // Search query entered by the user
  isLoading: boolean = false; // Show a loading indicator during the API call

  constructor(private companyService: BrokerCompanyService) { }
  search(): void {
    if (!this.query.trim()) {
      this.loadData()
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
    this.loadData()
  }

  loadData() {
    this.companyService.getAllBrokerCompanies().subscribe({
      next: (response) => {
        this.companies = response.insureds;
      },
      error: (error) => {
        console.error('Error fetching underwriters:', error);
      }
    })
  }
}

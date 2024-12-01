import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReferenceBannerComponent } from '../../../components/banners/reference-banner/reference-banner.component';
import { BrokerService } from '../../../../services/broker.service';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Broker } from '../../../../models/insurance-broker.model';

@Component({
  selector: 'app-broker-agents-reference-page',
  standalone: true,
  imports: [CommonModule, ReferenceBannerComponent, RouterLink, FormsModule],
  templateUrl: './broker-list.component.html',
  styleUrl: './broker-list.component.css'

})
export class BrokerListComponent {
  title = "Broker Agents"
  brokers: Broker[] = []
  query: string = ''; // Search query entered by the user
  isLoading: boolean = false; // Show a loading indicator during the API call

  constructor(private brokerService: BrokerService) { }

  // Method to search for people
  search(): void {
    if (!this.query.trim()) {
      this.loadData()
    }

    this.isLoading = true; // Start loading
    this.brokerService.searchInsuranceBrokers(this.query).subscribe(
      (data) => {
        this.brokers = data; // Update the results with the API response
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
    this.brokerService.getAllInsuranceBrokers().subscribe({
      next: (response) => {
        this.brokers = response.brokers;
      },
      error: (error) => {
        console.error('Error fetching underwriters:', error);
      }
    })
  }
}

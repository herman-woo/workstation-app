import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReferenceBannerComponent } from '../../../components/reference-banner/reference-banner.component';
import { RouterLink } from '@angular/router';
import { SearchbarComponent } from '../../../components/tools/searchbar/searchbar.component';
import { NamedInsuredService } from '../../../../services/named-insured.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-named-insureds-reference-page',
  standalone: true,
  imports: [ReferenceBannerComponent, CommonModule, RouterLink, SearchbarComponent,FormsModule],
  templateUrl: './named-insureds-reference-page.component.html',
  styleUrl: './named-insureds-reference-page.component.css'
})
export class NamedInsuredsReferencePageComponent {
  title = "Named Insureds"
  insureds: any[] = []
  query: string = ''; // Search query entered by the user
  isLoading: boolean = false; // Show a loading indicator during the API call

  constructor(private insuredService: NamedInsuredService) { }
  search(): void {
    if (!this.query.trim()) {
      this.insuredService.getAllNamedInsured().subscribe((data) => {
        this.insureds = data;
      })
      return;
    }

    this.isLoading = true; // Start loading
    this.insuredService.searchNamedInsured(this.query).subscribe(
      (data) => {
        this.insureds = data; // Update the results with the API response
        this.isLoading = false; // Stop loading
      },
      (error) => {
        console.error('Error fetching search results:', error);
        this.isLoading = false; // Stop loading
      }
    );
  }

  ngOnInit(): void {
    // Subscribe to the service and assign the data to the array
    this.insuredService.getAllNamedInsured().subscribe((data) => {
      this.insureds = data; // Assign the data to the array
    });
  }
  


}

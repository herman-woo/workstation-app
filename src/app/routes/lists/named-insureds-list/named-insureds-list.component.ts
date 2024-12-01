import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReferenceBannerComponent } from '../../../components/banners/reference-banner/reference-banner.component';
import { RouterLink } from '@angular/router';
import { NamedInsuredService } from '../../../../services/named-insured.service';
import { FormsModule } from '@angular/forms';
import { NamedInsured } from '../../../../models/named-insured.model';
import { InsuredCreationFormComponent } from '../../../components/forms/insured-creation-form/insured-creation-form.component';


@Component({
  selector: 'app-named-insureds-reference-page',
  standalone: true,
  imports: [ReferenceBannerComponent, CommonModule, RouterLink,FormsModule, InsuredCreationFormComponent],
  templateUrl: './named-insureds-list.component.html',
  styleUrl: './named-insureds-list.component.css'
})
export class NamedInsuredsListComponent {
  title = "Named Insureds"
  insureds: NamedInsured[] = []
  query: string = ''; // Search query entered by the user
  isLoading: boolean = false; // Show a loading indicator during the API call

  constructor(private insuredService: NamedInsuredService) { }
  search(): void {
    if (!this.query.trim()) {
      this.loadData()
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
    this.loadData()
  }

  loadData() {
    this.insuredService.getAllNamedInsured().subscribe({
      next: (response) => {
        this.insureds = response.insureds;
      },
      error: (error) => {
        console.error('Error fetching underwriters:', error);
      }
    })
  }


}

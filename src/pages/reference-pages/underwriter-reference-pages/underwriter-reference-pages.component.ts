import { Component } from '@angular/core';
import { ReferenceBannerComponent } from '../reference-page-items/reference-banner/reference-banner.component';
import { SearchbarComponent } from '../../../components/tools/searchbar/searchbar.component';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { UnderwriterService } from '../../../services/underwriter.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-underwriter-reference-pages',
  standalone: true,
  imports: [ReferenceBannerComponent, CommonModule, RouterLink, SearchbarComponent, FormsModule ],
  templateUrl: './underwriter-reference-pages.component.html',
  styleUrl: './underwriter-reference-pages.component.css'
})
export class UnderwriterReferencePagesComponent {
  title = "Underwriters"
  underwriters: any[] = []
  query: string = ''; // Search query entered by the user
  isLoading: boolean = false; // Show a loading indicator during the API call

  constructor(private underwriterService: UnderwriterService) { }
  search(): void {
    if (!this.query.trim()) {
      this.underwriterService.getAllUnderwriters().subscribe((data) => {
        this.underwriters = data;
      })
      return;
    }

    this.isLoading = true; // Start loading
    this.underwriterService.searchUnderwriter(this.query).subscribe(
      (data) => {
        this.underwriters = data; // Update the results with the API response
        this.isLoading = false; // Stop loading
      },
      (error) => {
        console.error('Error fetching search results:', error);
        this.isLoading = false; // Stop loading
      }
    );
  }

  ngOnInit(): void {
    this.underwriterService.getAllUnderwriters().subscribe((data) => {
      this.underwriters = data
    })
  }

}

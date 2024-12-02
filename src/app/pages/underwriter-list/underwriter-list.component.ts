import { Component } from '@angular/core';
import { ReferenceBannerComponent } from '../../components/reference-banner/reference-banner.component';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { UnderwriterService } from '../../../services/underwriter.service';
import { FormsModule } from '@angular/forms';
import { Underwriter } from '../../../models/underwriter.model';
import { UnderwriterFormComponent } from '../../components/underwriter-form/underwriter-form.component';
@Component({
  selector: 'app-underwriter-reference-pages',
  standalone: true,
  imports: [ReferenceBannerComponent, CommonModule, RouterLink, FormsModule, UnderwriterFormComponent],
  templateUrl: './underwriter-list.component.html',
  styleUrl: './underwriter-list.component.scss'
})
export class UnderwriterListComponent {
  title = "Underwriters"
  underwriters: Underwriter[] = []
  query: string = ''; // Search query entered by the user
  isLoading: boolean = false; // Show a loading indicator during the API call

  constructor(private underwriterService: UnderwriterService) { }
  search(): void {
    if (!this.query.trim()) {
      this.loadData()
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
    this.loadData()
    this.underwriterService.refresh$.subscribe(() => {
      this.loadData();
    });
  }
  
  loadData() {
    this.underwriterService.getAllUnderwriters("Environmental","").subscribe({
      next: (response) => {
        this.underwriters = response.underwriters;
      },
      error: (error) => {
        console.error('Error fetching underwriters:', error);
      }
    })
  }

}
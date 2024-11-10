import { Component } from '@angular/core';
import { ReferenceBannerComponent } from '../reference-page-items/reference-banner/reference-banner.component';
import { SearchbarComponent } from '../../../tools/searchbar/searchbar.component';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { UnderwriterService } from '../../../../services/underwriter.service';

@Component({
  selector: 'app-underwriter-reference-pages',
  standalone: true,
  imports: [ReferenceBannerComponent, CommonModule, RouterLink, SearchbarComponent ],
  templateUrl: './underwriter-reference-pages.component.html',
  styleUrl: './underwriter-reference-pages.component.css'
})
export class UnderwriterReferencePagesComponent {
  title = "Underwriters"
  underwriters: any[] = []

  constructor(private underwriterService: UnderwriterService) { }

  ngOnInit(): void {
    this.underwriterService.getAllUnderwriters().subscribe((data) => {
      this.underwriters = data
    })
  }

}

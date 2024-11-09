import { Component } from '@angular/core';
import { ReferenceBannerComponent } from '../reference-page-items/reference-banner/reference-banner.component';
import { SearchbarComponent } from '../../../tools/searchbar/searchbar.component';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import * as data from '../../../../../data/models/underwriters.json'

@Component({
  selector: 'app-underwriter-reference-pages',
  standalone: true,
  imports: [ReferenceBannerComponent, CommonModule, RouterLink, SearchbarComponent ],
  templateUrl: './underwriter-reference-pages.component.html',
  styleUrl: './underwriter-reference-pages.component.css'
})
export class UnderwriterReferencePagesComponent {

  title = "Underwriters"
  underwriters = data.underwriters

}

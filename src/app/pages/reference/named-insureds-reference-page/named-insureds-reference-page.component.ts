import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReferenceBannerComponent } from '../reference-banner/reference-banner.component';
import * as data from '../../../../../data/models/NamedInsureds.json'
import { RouterLink } from '@angular/router';
import { SearchbarComponent } from '../../../tools/searchbar/searchbar.component';

@Component({
  selector: 'app-named-insureds-reference-page',
  standalone: true,
  imports: [ReferenceBannerComponent, CommonModule, RouterLink, SearchbarComponent],
  templateUrl: './named-insureds-reference-page.component.html',
  styleUrl: './named-insureds-reference-page.component.css'
})
export class NamedInsuredsReferencePageComponent {

  title = "Named Insureds"
  insureds = data.namedInsureds
}

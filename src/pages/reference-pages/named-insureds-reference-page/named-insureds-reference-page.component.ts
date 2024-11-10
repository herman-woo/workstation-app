import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReferenceBannerComponent } from '../reference-page-items/reference-banner/reference-banner.component';
import { RouterLink } from '@angular/router';
import { SearchbarComponent } from '../../../components/tools/searchbar/searchbar.component';
import { NamedInsuredService } from '../../../services/named-insured.service';



@Component({
  selector: 'app-named-insureds-reference-page',
  standalone: true,
  imports: [ReferenceBannerComponent, CommonModule, RouterLink, SearchbarComponent],
  templateUrl: './named-insureds-reference-page.component.html',
  styleUrl: './named-insureds-reference-page.component.css'
})
export class NamedInsuredsReferencePageComponent {
  title = "Named Insureds"
  insureds: any[] = []

  constructor(private insuredService: NamedInsuredService) { }

  ngOnInit(): void {
    // Subscribe to the service and assign the data to the array
    this.insuredService.getAllNamedInsured().subscribe((data) => {
      this.insureds = data; // Assign the data to the array
    });
  }
  


}

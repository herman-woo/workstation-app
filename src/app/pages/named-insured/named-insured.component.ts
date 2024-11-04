import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import * as insuredData from '../../../../data/models/NamedInsureds.json'
import { ReferenceBannerComponent } from '../reference/reference-banner/reference-banner.component';
import { NamedInsuredTableComponent } from '../../tables/named-insured-table/named-insured-table.component';

@Component({
  selector: 'app-named-insured',
  standalone: true,
  imports: [CommonModule, ReferenceBannerComponent, NamedInsuredTableComponent],
  templateUrl: './named-insured.component.html',
  styleUrl: './named-insured.component.css'
})




export class NamedInsuredComponent {
  id: string | null = null;
  insuredName : string = "";
  insuredAddress : string = "";
  insuredProvince : string = "";
  pageSubject = "Named Insured"

  
  constructor(private route: ActivatedRoute) { }
  ngOnInit(): void {
    // Capture the ID from the route
    this.id = this.route.snapshot.paramMap.get('id');
    const insured = (insuredData as any).namedInsureds.find((insured: any) => insured.id === this.id)
    this.insuredName = insured.insuredName
    this.insuredAddress = insured.address
    this.insuredProvince = insured.province
  }

}

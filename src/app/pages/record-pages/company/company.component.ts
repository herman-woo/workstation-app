import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecordHeaderComponent } from '../record-items/record-header/record-header.component';
import { RecordBreadcrumbComponent } from '../record-items/record-breadcrumb/record-breadcrumb.component';
import { RouterLink } from '@angular/router';
import * as companyData from '../../../../../data/models/broker-companies.json'


@Component({
  selector: 'company-page',
  standalone: true,
  imports: [RecordHeaderComponent, RecordBreadcrumbComponent,RouterLink],
  templateUrl: './company.component.html',
  styleUrl: './company.component.css'
})

export class CompanyComponent {

  id: string | null = null;
  companyId: string = "";
  brokerCompanyName: string = "";
  address: string = "";
  city: string = "";
  province: string = "";
  postalCode: string = "";
  isTopLevel: boolean = false;
  parentCompanyId: string = "";
  parentCompanyName: string = "";

  constructor(private route: ActivatedRoute) { }
  ngOnInit(): void {
    // Capture the ID from the route
    this.id = this.route.snapshot.paramMap.get('id');
    const company = (companyData as any).companies[this.id!]
    this.brokerCompanyName = company.brokerCompanyName
    this.address = company.Address
    this.city = company.City
    this.province = company.Province
    this.postalCode = company.PostalCode
    this.parentCompanyId = company.parentCompanyId
    this.companyId = company.brokerCompanyId
    this.isTopLevel = company.isTopLevel
    if (!this.isTopLevel) {
      const parent = (companyData as any).companies[this.parentCompanyId!]
      this.parentCompanyName = parent.brokerCompanyName
    }


  }

}

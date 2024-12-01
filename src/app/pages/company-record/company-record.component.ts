import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecordHeaderComponent } from '../../components/record-header/record-header.component';
import { BreadcrumbComponent } from '../../components/breadcrumb/breadcrumb.component';
import { RouterLink } from '@angular/router';
import { BrokerCompanyService } from '../../../services/broker-company.service';

@Component({
  selector: 'company-page',
  standalone: true,
  imports: [RecordHeaderComponent, BreadcrumbComponent,RouterLink],
  templateUrl: './company-record.component.html',
  styleUrl: './company-record.component.css'
})

export class CompanyRecordComponent {

  id: string | null = null;
  companyId: number = null;
  brokerCompanyName: string = "";
  address: string = "";
  city: string = "";
  province: string = "";
  postalCode: string = "";
  isTopLevel: string = "";
  parentCompanyId: number = null;
  parentCompanyName: string = "";

  constructor(private route: ActivatedRoute,
    private companyService: BrokerCompanyService){}
  ngOnInit(): void {
    // Capture the ID from the route
    this.id = this.route.snapshot.paramMap.get('id');
    this.companyService.getBrokerCompanyById(parseInt(this.id!)).subscribe((data) => {
      this.brokerCompanyName = data.name
      this.address = data.address
      this.city = data.city
      this.province = data.province
      this.postalCode = data.postalCode
      this.parentCompanyId = data.parentCompanyId
      this.parentCompanyName = data.parentCompanyName
      this.companyId = data.companyId
      this.isTopLevel = data.topLevel
    })

  }

}

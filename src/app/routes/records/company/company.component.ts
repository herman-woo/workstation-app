import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecordHeaderComponent } from '../../../components/record-items/record-header/record-header.component';
import { RecordBreadcrumbComponent } from '../../../components/record-items/record-breadcrumb/record-breadcrumb.component';
import { RouterLink } from '@angular/router';
import { BrokerCompanyService } from '../../../../services/broker-company.service';

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

  constructor(private route: ActivatedRoute,
    private companyService: BrokerCompanyService){}
  ngOnInit(): void {
    // Capture the ID from the route
    this.id = this.route.snapshot.paramMap.get('id');
    this.companyService.getBrokerCompanyById(parseInt(this.id!)).subscribe((data) => {
      this.brokerCompanyName = data.broker_company_name
      this.address = data.broker_company_address
      this.city = data.broker_company_city
      this.province = data.broker_company_province
      this.postalCode = data.broker_company_postal_code
      this.parentCompanyId = data.parent_company
      this.parentCompanyName = data.parent_company_name
      this.companyId = data.broker_company_id
      this.isTopLevel = data.is_top_level
    })

  }

}

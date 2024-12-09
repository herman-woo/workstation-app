import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { RecordHeaderComponent } from '../../components/record-header/record-header.component';
import { BreadcrumbComponent } from '../../components/breadcrumb/breadcrumb.component';
import { RouterLink } from '@angular/router';
import { BrokerCompanyService } from '../../../services/broker-company.service';
import { BrokerCompany } from '../../../models/broker-company.model';

@Component({
  selector: 'company-page',
  standalone: true,
  imports: [RecordHeaderComponent, BreadcrumbComponent, RouterLink, CommonModule],
  templateUrl: './company-record.component.html',
  styleUrl: './company-record.component.scss',
})
export class CompanyRecordComponent {
  company: BrokerCompany;
  id: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private companyService: BrokerCompanyService
  ) {}
  ngOnInit(): void {
    // Capture the ID from the route
    this.id = this.route.snapshot.paramMap.get('id');
    this.companyService
      .getBrokerCompanyById(parseInt(this.id!))
      .subscribe((data) => (this.company = data));
  }
}

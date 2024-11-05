import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecordHeaderComponent } from '../record-items/record-header/record-header.component';
import { RecordBreadcrumbComponent } from '../record-items/record-breadcrumb/record-breadcrumb.component';
import { BrokersTableComponent } from '../../../tables/brokers-table/brokers-table.component';
import * as brokerData from '../../../../../data/models/brokers.json'

@Component({
  selector: 'app-broker',
  standalone: true,
  imports: [RecordBreadcrumbComponent, RecordHeaderComponent, BrokersTableComponent],
  templateUrl: './broker.component.html',
  styleUrl: './broker.component.css'
})
export class BrokerComponent {

  id: string | null = null;
  brokerFirstName: string = "";
  brokerLastName: string = "";
  brokerTitle: string = "";
  brokerPhone: string = "";
  brokerEmail: string = "";
  brokerCompanyId: string = "";
  brokerCompanyName: string = "";

  constructor(private route: ActivatedRoute) { }
  ngOnInit(): void {
    // Capture the ID from the route
    this.id = this.route.snapshot.paramMap.get('id');
    const broker = (brokerData as any).brokers.find((broker: any) => broker.brokerId === this.id)
    this.brokerFirstName = broker.brokerFirstName
    this.brokerLastName = broker.brokerLastName
    this.brokerTitle = broker.brokerTitle
    this.brokerPhone = broker.brokerPhone
    this.brokerEmail = broker.brokerEmail
    this.brokerCompanyId = broker.brokerCompanyId
    this.brokerCompanyName = broker.brokerCompanyName

  }
}

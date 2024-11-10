import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecordBreadcrumbComponent } from '../record-items/record-breadcrumb/record-breadcrumb.component';
import { RouterLink } from '@angular/router';
import { BrokerService } from '../../../../services/broker.service';

@Component({
  selector: 'broker-page',
  standalone: true,
  imports: [RecordBreadcrumbComponent,RouterLink],
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

  constructor(private route: ActivatedRoute,
    private brokerService: BrokerService) { }
  ngOnInit(): void {
    // Capture the ID from the route
    this.id = this.route.snapshot.paramMap.get('id');
    this.brokerService.getInsuranceBrokerById(parseInt(this.id!)).subscribe((data) => {
      this.brokerFirstName = data.broker_first_name
      this.brokerLastName = data.broker_last_name
      this.brokerTitle = data.broker_title
      this.brokerPhone = data.broker_phone_number
      this.brokerEmail = data.broker_email
      this.brokerCompanyId = data.broker_company
      this.brokerCompanyName = data.broker_company_name
    })
  }
}

import { Component, Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbComponent } from '../../components/breadcrumb/breadcrumb.component';
import { RouterLink } from '@angular/router';
import { BrokerService } from '../../../services/broker.service';

@Component({
  selector: 'broker-page',
  standalone: true,
  imports: [BreadcrumbComponent,RouterLink],
  templateUrl: './broker-record.component.html',
  styleUrl: './broker-record.component.css'
})

@Injectable()
export class BrokerRecordComponent {

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
      this.brokerFirstName = data.firstName
      this.brokerLastName = data.lastName
      this.brokerTitle = data.title
      this.brokerPhone = data.phoneNumber
      this.brokerEmail = data.email
      this.brokerCompanyId = data.brokerComapnyId
      this.brokerCompanyName = data.brokerCompanyName
    })
  }
}

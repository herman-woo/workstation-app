import { Component, Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbComponent } from '../../components/breadcrumb/breadcrumb.component';
import { RouterLink } from '@angular/router';
import { BrokerService } from '../../../services/broker.service';
import { Broker } from '../../../models/insurance-broker.model';

@Component({
  selector: 'broker-page',
  standalone: true,
  imports: [BreadcrumbComponent, RouterLink],
  templateUrl: './broker-record.component.html',
  styleUrl: './broker-record.component.scss',
})
@Injectable()
export class BrokerRecordComponent {
  id: string | null = null;
  broker: Broker;

  constructor(
    private route: ActivatedRoute,
    private brokerService: BrokerService
  ) {}
  ngOnInit(): void {
    // Capture the ID from the route
    this.id = this.route.snapshot.paramMap.get('id');
    this.brokerService
      .getInsuranceBrokerById(parseInt(this.id!))
      .subscribe((data: Broker) => (this.broker = data));
  }
}

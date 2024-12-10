import { Component, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbComponent } from '../../components/breadcrumb/breadcrumb.component';
import { RouterLink } from '@angular/router';
import { BrokerService } from '../../../services/broker.service';
import { Broker } from '../../../models/insurance-broker.model';
import { AccountService } from '../../../services/account.service';

@Component({
  selector: 'broker-page',
  standalone: true,
  imports: [BreadcrumbComponent, RouterLink, CommonModule],
  templateUrl: './broker-record.component.html',
  styleUrl: './broker-record.component.scss',
})
@Injectable()
export class BrokerRecordComponent {
  id: string | null = null;
  broker: Broker;
  accounts: any[] = [];
  count = 0;

  constructor(
    private route: ActivatedRoute,
    private brokerService: BrokerService,
    private accountService: AccountService
  ) { }
  ngOnInit(): void {
    // Capture the ID from the route
    this.id = this.route.snapshot.paramMap.get('id');
    this.brokerService
      .getInsuranceBrokerById(parseInt(this.id!))
      .subscribe((data: Broker) => (this.broker = data));
    this.getAccounts();
  }

  getAccounts() {
    this.accountService
      .getAccountsByForeignKey('broker', parseInt(this.id))
      .subscribe({
        next: (response) => {
          console.log(response);
          this.accounts = response.accounts;
          this.count = response.count;
        },
        error: (error) => {
          console.error('Error fetching underwriters:', error);
        },
      });
  }
}

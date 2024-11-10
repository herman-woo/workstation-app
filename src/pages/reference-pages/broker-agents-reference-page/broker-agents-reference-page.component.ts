import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReferenceBannerComponent } from '../reference-page-items/reference-banner/reference-banner.component';
import { RouterLink } from '@angular/router';
import { SearchbarComponent } from '../../../components/tools/searchbar/searchbar.component';
import { BrokerService } from '../../../services/broker.service';

@Component({
  selector: 'app-broker-agents-reference-page',
  standalone: true,
  imports: [CommonModule, ReferenceBannerComponent, SearchbarComponent, RouterLink],
  templateUrl: './broker-agents-reference-page.component.html',
  styleUrl: './broker-agents-reference-page.component.css'
})
export class BrokerAgentsReferencePageComponent {
  title = "Broker Agents"
  brokers: any[] = []

  constructor(private brokerService: BrokerService){}
  ngOnInit(): void {
    this.brokerService.getAllInsuranceBrokers().subscribe((data) =>{ 
      this.brokers = data;
    })
  }
}

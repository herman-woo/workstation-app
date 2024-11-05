import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReferenceBannerComponent } from '../reference-page-items/reference-banner/reference-banner.component';
import { RouterLink } from '@angular/router';
import * as brokerData from '../../../../../data/models/brokers.json'
import { SearchbarComponent } from '../../../tools/searchbar/searchbar.component';
import { BrokersTableComponent } from '../../../tables/brokers-table/brokers-table.component';

@Component({
  selector: 'app-broker-agents-reference-page',
  standalone: true,
  imports: [CommonModule, ReferenceBannerComponent, SearchbarComponent, RouterLink, BrokersTableComponent],
  templateUrl: './broker-agents-reference-page.component.html',
  styleUrl: './broker-agents-reference-page.component.css'
})
export class BrokerAgentsReferencePageComponent {

  title = "Broker Agents"
  brokers = brokerData.brokers
}

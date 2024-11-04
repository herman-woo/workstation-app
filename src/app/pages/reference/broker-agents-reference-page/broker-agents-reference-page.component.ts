import { Component } from '@angular/core';
import { ReferenceBannerComponent } from '../reference-banner/reference-banner.component';
import { AccountsTableComponent } from '../../../tables/accounts-table/accounts-table.component';

@Component({
  selector: 'app-broker-agents-reference-page',
  standalone: true,
  imports: [ReferenceBannerComponent, AccountsTableComponent],
  templateUrl: './broker-agents-reference-page.component.html',
  styleUrl: './broker-agents-reference-page.component.css'
})
export class BrokerAgentsReferencePageComponent {

  title = "Broker Agents"
}

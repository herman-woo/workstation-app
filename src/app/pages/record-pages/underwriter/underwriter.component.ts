import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { RecordBreadcrumbComponent } from '../record-items/record-breadcrumb/record-breadcrumb.component';
import { RouterLink } from '@angular/router';
import * as data from '../../../../../data/models/underwriters.json'
import * as accountData from '../../../../../data/models/accounts.json'

@Component({
  selector: 'app-underwriter',
  standalone: true,
  imports: [RecordBreadcrumbComponent, RouterLink, CommonModule],
  templateUrl: './underwriter.component.html',
  styleUrl: './underwriter.component.css'
})
export class UnderwriterComponent {
  id: string | null = null;
  underwriterFirstName: string = "";
  underwriterLastName: string = "";
  underwriterRole: string = "";
  businessUnit: string = "";
  dateCreated: string = "";
  lastUpdated: string = "";
  accounts: any[] = []
  count = 0

  constructor(private route: ActivatedRoute) { }
  ngOnInit(): void {
    // Capture the ID from the route
    this.id = this.route.snapshot.paramMap.get('id');
    const broker = (data as any).underwriters[this.id!]
    this.underwriterFirstName = broker.underwriterFirstName
    this.underwriterLastName = broker.underwriterLastName
    this.underwriterRole = broker.underwriterRole
    this.businessUnit = broker.businessUnit
    this.dateCreated = broker.dateCreated
    this.lastUpdated = broker.lastUpdated


    for(let account of accountData.accounts){
      if(account.underwriterId.toString() == this.id!){
        this.accounts.push(account)
        this.count++
      }
    }


  }
}

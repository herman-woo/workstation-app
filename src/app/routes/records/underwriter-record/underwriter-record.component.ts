import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbComponent } from '../../../components/common/breadcrumb/breadcrumb.component';
import { RouterLink } from '@angular/router';
import * as accountData from '../../../../../data/models/accounts.json'
import { UnderwriterService } from '../../../../services/underwriter.service';

@Component({
  selector: 'app-underwriter',
  standalone: true,
  imports: [BreadcrumbComponent, RouterLink, CommonModule],
  templateUrl: './underwriter-record.component.html',
  styleUrl: './underwriter-record.component.css'
})
export class UnderwriterRecordComponent {
  id: string | null = null;
  underwriter: any = null
  underwriterFirstName: string = "";
  underwriterLastName: string = "";
  underwriterRole: string = "";
  businessUnit: string = "";
  dateCreated: string = "";
  lastUpdated: string = "";
  accounts: any[] = []
  count = 0

  constructor(private route: ActivatedRoute,
    private underwriterService: UnderwriterService) { }
  ngOnInit(): void {
    // Capture the ID from the route
    this.id = this.route.snapshot.paramMap.get('id');
    this.underwriterService.getUnderwriterById(parseInt(this.id!)).subscribe((data) => {
      this.underwriterFirstName = data.uw_first_name
      this.underwriterLastName = data.uw_last_name
      this.underwriterRole = data.uw_role
      this.businessUnit = data.uw_business_unit
      this.dateCreated = data.created_time
      this.lastUpdated = data.updated_time
    })

    for(let account of accountData.accounts){
      if(account.underwriterId.toString() == this.id!){
        this.accounts.push(account)
        this.count++
      }
    }


  }
}

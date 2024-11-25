import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbComponent } from '../../../components/common/breadcrumb/breadcrumb.component';
import { RouterLink } from '@angular/router';
import * as accountData from '../../../../../data/models/accounts.json'
import { UnderwriterService } from '../../../../services/underwriter.service';
import { Underwriter } from '../../../../models/underwriter.model';

@Component({
  selector: 'app-underwriter',
  standalone: true,
  imports: [BreadcrumbComponent, RouterLink, CommonModule],
  templateUrl: './underwriter-record.component.html',
  styleUrl: './underwriter-record.component.css'
})
export class UnderwriterRecordComponent {
  id: string | null = null;
  underwriter: Underwriter = new Underwriter()
  linkedAccounts: any[] = []
  count = 0

  constructor(private route: ActivatedRoute,
    private underwriterService: UnderwriterService) { }
  ngOnInit(): void {
    // Capture the ID from the route
    this.id = this.route.snapshot.paramMap.get('id');
    this.underwriterService.getUnderwriterById(parseInt(this.id!)).subscribe((data: Underwriter) => this.underwriter = data)

    for(let account of accountData.accounts){
      if(account.underwriterId.toString() == this.id!){
        this.linkedAccounts.push(account)
        this.count++
      }
    }


  }
}

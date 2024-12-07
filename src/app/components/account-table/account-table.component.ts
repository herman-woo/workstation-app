import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AccountService } from '../../../services/account.service';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'account-table',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './account-table.component.html',
  styleUrl: './account-table.component.scss',
})
export class AccountTableComponent {
  accounts = []
  yearSelection = '';
  policyIdFilter: string = "";
  insuredFilter: string= "";
  underwriterFilter: string = "";
  brokerFilter: string = "";
  brokerageFilter: string = "";
  submisisonSelection = '';
  statusSelection = '';

  constructor(private accountService: AccountService) { }
  filter(): void {
    this.getAccounts(this.yearSelection,this.insuredFilter,this.underwriterFilter,this.brokerFilter,this.brokerageFilter,this.submisisonSelection,this.statusSelection)
  }

  ngOnInit(){
    this.filter()
  }
  getAccounts(year,insured: string,underwriter:string,broker:string, brokerage:string,submission,status) {
    if(year === '---'){
      year = ""
    }
    if(submission === '---'){
      submission = ""
    }
    if(status === '---'){
      status = ""
    }
    this.accountService.getAllAccounts(year,insured,underwriter,broker,brokerage,submission,status).subscribe({
      next: (response) => {
        console.log(response)
        this.accounts = response.accounts;
      },
      error: (error) => {
        console.error('Error fetching accounts:', error);
      }
    })
  }
}

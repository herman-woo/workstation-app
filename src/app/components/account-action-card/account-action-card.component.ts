import { Component, input, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../../../services/account.service';
import { RaterService } from '../../../services/rater.service';

@Component({
  selector: 'account-action-card',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './account-action-card.component.html',
  styleUrl: './account-action-card.component.scss'
})
export class AccountActionCardComponent {
  @Input() accountId: number;
  @Input() accountStatus: string;
  @Input() existingPolicyId: string;
  @Input() accountData;
  currentYear: number = new Date().getFullYear();
  static accountStatusSelection = {
    RATE: 'Rating/Quoting',
    BOUND: 'Bound'
  };
  accountStatusSelection = AccountActionCardComponent.accountStatusSelection;
  policyId:string;
  productSelection: string;
  constructor(private router: Router,
    private accountService: AccountService,
    private raterService: RaterService
  ) { }


  updateRater(data:object){
    this.raterService.addRater(
      this.currentYear,
      this.accountId,
      1, 
      (data as any).product_type,
      1,
      this.accountData.named_insured,
      this.accountData.named_insured_id,
      this.accountData.business_unit_id)
      .subscribe({
        next: (createdItem) => {
          console.log('Created Item:', createdItem); // Debugging
          // // console.log('Created Item ID:', createdItem?.id); // Check if ID is present
        
          // if (createdItem?.id) {
          //   this.router.navigate(['/rater', createdItem.id]); // ✅ Navigate if ID exists
          // } else {
          //   console.error('Error: Created item ID is undefined');
          // }
        },      
      });
    this.updateAccount(data)
  }


  updateAccount(data:object) {
    this.accountService.updateAccount(this.accountId, data)
  }
}

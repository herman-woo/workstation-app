import { Component, input, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../../../services/account.service';

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
  static accountStatusSelection = {
    RATE: 'Rating/Quoting',
    BOUND: 'Bound'
  };
  accountStatusSelection = AccountActionCardComponent.accountStatusSelection;
  policyId:string;
  productSelection: string;
  constructor(private router: Router,
    private accountService: AccountService
  ) { }

  updateAccount(data:object) {
    this.accountService.updateAccount(this.accountId, data)
  }
}

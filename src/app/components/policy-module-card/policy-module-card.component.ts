import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../../../services/account.service';


@Component({
  selector: 'policy-module-card',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './policy-module-card.component.html',
  styleUrl: './policy-module-card.component.scss'
})
export class PolicyModuleCardComponent {
  @Input() accountData: any;
  accountId: number = 0;
  policyStartDate: string;
  policyEndDate: string;
  constructor(private route: ActivatedRoute, private accountService: AccountService) { }
  
  ngOnInit(): void {
    this.accountId = parseInt(this.route.snapshot.paramMap.get('id')!);
  }
  updateAccount(data:object) {
    this.accountService.updateAccount(this.accountId, data)
  }
}

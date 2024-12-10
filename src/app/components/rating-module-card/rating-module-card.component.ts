import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountService } from '../../../services/account.service';

@Component({
  selector: 'rating-module-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rating-module-card.component.html',
  styleUrl: './rating-module-card.component.scss'
})
export class RatingModuleCardComponent {

  @Input() accountData: any;

  constructor(private accountService: AccountService
  ) { }

  updateAccount(data:object) {
    this.accountService.updateAccount(this.accountData.id, data)
  }
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'account-product-card',
  standalone: true,
  imports: [],
  templateUrl: './account-product-card.component.html',
  styleUrl: './account-product-card.component.css'
})
export class AccountProductCardComponent {

  @Input() accountData: any;

}

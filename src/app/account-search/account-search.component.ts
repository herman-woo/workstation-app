import { Component } from '@angular/core';
import { AccountTableComponent } from '../account-table/account-table.component';

@Component({
  selector: 'app-account-search',
  standalone: true,
  imports: [AccountTableComponent],
  templateUrl: './account-search.component.html',
  styleUrl: './account-search.component.scss'
})
export class AccountSearchComponent {

}

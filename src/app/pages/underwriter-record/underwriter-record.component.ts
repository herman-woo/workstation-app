import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbComponent } from '../../components/breadcrumb/breadcrumb.component';
import { RouterLink } from '@angular/router';
import { UnderwriterService } from '../../../services/underwriter.service';
import { Underwriter } from '../../../models/underwriter.model';
import { AccountService } from '../../../services/account.service';

@Component({
  selector: 'app-underwriter',
  standalone: true,
  imports: [BreadcrumbComponent, RouterLink, CommonModule],
  templateUrl: './underwriter-record.component.html',
  styleUrl: './underwriter-record.component.scss',
})
export class UnderwriterRecordComponent {
  id: string | null = null;
  underwriter: Underwriter = new Underwriter();
  accounts: any[] = [];
  count = 0;

  constructor(
    private route: ActivatedRoute,
    private underwriterService: UnderwriterService,
    private accountService: AccountService
  ) {}
  ngOnInit(): void {
    // Capture the ID from the route
    this.id = this.route.snapshot.paramMap.get('id');
    this.underwriterService
      .getUnderwriterById(parseInt(this.id!))
      .subscribe((data: Underwriter) => (this.underwriter = data));
    this.getAccounts();
  }

  getAccounts() {
    this.accountService
      .getAccountsByForeignKey('underwriter', parseInt(this.id))
      .subscribe({
        next: (response) => {
          console.log(response);
          this.accounts = response.accounts;
          this.count = response.count;
        },
        error: (error) => {
          console.error('Error fetching underwriters:', error);
        },
      });
  }
}

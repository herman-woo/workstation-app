import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute,RouterLink,Router,RouterOutlet } from '@angular/router';
import { BreadcrumbComponent } from '../../components/breadcrumb/breadcrumb.component';
import { RiskSummaryTabComponent } from '../../components/risk-summary-tab/risk-summary-tab.component';
import { RatingQuotingTabComponent } from '../../components/rating-quoting-tab/rating-quoting-tab.component';
import { FileStructureComponent } from '../../components/file-structure-tab/file-structure.component';
import { AccountNotesComponent } from '../../components/notes-tab/account-notes.component';
import { AccountService } from '../../../services/account.service';
import { AccountEntitiesComponent } from '../account-entities/account-entities.component';
import { AccountStatusCardComponent } from '../account-status-card/account-status-card.component';
import { AccountActionCardComponent } from '../account-action-card/account-action-card.component';
import { RaterSummaryComponent } from '../rater-summary/rater-summary.component';
import { RaterService } from '../../../services/rater.service';
import { Rater } from '../../../models/rater.model';
import { catchError, switchMap, of } from 'rxjs';
import { RaterOptionsComponent } from "../rater-options/rater-options.component";



@Component({
  selector: 'app-account',
  standalone: true,
  imports: [CommonModule,
    RiskSummaryTabComponent,
    RatingQuotingTabComponent,
    FileStructureComponent,
    AccountNotesComponent,
    BreadcrumbComponent,
    AccountEntitiesComponent,
    AccountStatusCardComponent,
    AccountActionCardComponent,
    RaterSummaryComponent,
    RouterLink,
    RouterOutlet, RaterOptionsComponent],
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss'
})
export class AccountComponent {

  //logic and variable for account page tabs
  activeTab: any;
  setActiveTab(tabNumber: any) {
    this.activeTab = tabNumber
  }
  activeRoute: any;
  id: string | null = null;
  accountRecord = null;
  accountRater: Rater = null;
  loading: boolean = true;
  errorMessage: string | null = null;

  constructor(private route: ActivatedRoute,
    private accountService: AccountService,
      private raterService: RaterService,
      private router: Router,
  ) { }
  setActiveRoute(route: string) {
    this.accountService.setActiveRoute(route)
    this.activeRoute = route
  }
  ngOnInit(): void {
    // Capture the ID from the route
    this.id = this.route.snapshot.paramMap.get('id');
    this.activeRoute = this.accountService.getActiveRoute()
    if (!this.id) {
      this.errorMessage = "Invalid account ID.";
      this.loading = false;
      return;
    }
    console.log("get account")
    const accountId = parseInt(this.id);

    this.accountService.getAccountById(accountId).pipe(
      
      switchMap((data) => {
        this.accountRecord = data;
        this.accountService.setAccountData(data)
        return this.raterService.getRaterByAccountID(accountId);
      }),
      catchError((error) => {
        this.errorMessage = error.message;
        this.loading = false;
        return of(null); // Ensures observable chain does not break
      })
    ).subscribe((rater) => {
      this.raterService.setRaterData(rater)
      this.loading = false;
    });
  }
}

import { Routes } from '@angular/router';
import { AccountComponent } from './components/account/account.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UnderwriterRecordComponent } from './pages/underwriter-record/underwriter-record.component';
import { UnderwriterListComponent } from './pages/underwriter-list/underwriter-list.component';
import { NamedInsuredsListComponent } from './pages/named-insureds-list/named-insureds-list.component';
import { NamedInsuredRecordComponent } from './pages/named-insured-record/named-insured-record.component';
import { BrokerListComponent } from './pages/broker-list/broker-list.component';
import { BrokerRecordComponent } from './pages/broker-record/broker-record.component';
import { BrokerCompaniesListComponent } from './pages/broker-companies-list/broker-companies-list.component';
import { RiskSummaryTabComponent } from './components/risk-summary-tab/risk-summary-tab.component';
import { CompanyRecordComponent } from './pages/company-record/company-record.component';
import { SubmissionComponent } from './pages/submission/submission.component';
import { AccountSearchComponent } from './components/account-search/account-search.component';
import { NewBrokerFormComponent } from './pages/new-broker-form/new-broker-form.component';
import { RaterSummaryComponent } from './components/rater-summary/rater-summary.component';
import { FilesModuleCardComponent } from './components/files-module-card/files-module-card.component';
import { RaterOptionsComponent } from './components/rater-options/rater-options.component';
import { FileStructureComponent } from './components/file-structure-tab/file-structure.component';
import { CommentsSectionCardComponent } from './components/comments-section-card/comments-section-card.component';
import { RaterTableComponent } from './components/rater-table/rater-table.component';

export const routes: Routes = [
    //main page references
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent},
    { path: 'underwriters', component: UnderwriterListComponent},
    { path: 'underwriter', redirectTo: '/insureds', pathMatch: 'full' },
    { path: 'underwriter/:id', component: UnderwriterRecordComponent},
    { path: 'insureds', component: NamedInsuredsListComponent},
    { path: 'insured', redirectTo: '/insureds', pathMatch: 'full' },
    { path: 'insured/:id', component: NamedInsuredRecordComponent},
    { path: 'brokers', component: BrokerListComponent},
    { path: 'broker', redirectTo: '/brokers', pathMatch: 'full' },
    { path: 'broker/:id', component: BrokerRecordComponent},
    { path: 'brokercompanies', component: BrokerCompaniesListComponent},
    { path: 'brokercompany', redirectTo: '/brokercompanies', pathMatch: 'full' },
    { path: 'brokercompany/:id', component: CompanyRecordComponent},
    { path: 'account/:id', component: AccountComponent, children: [
        { path: 'rater', component: RaterSummaryComponent },
        { path: 'quotes', component: RaterOptionsComponent },
        { path: 'files', component: FileStructureComponent },
        { path: 'tasks-history', component: CommentsSectionCardComponent},
        { path: '', redirectTo: 'rater', pathMatch: 'full' }
    ]},
    { path: 'account/risksummary/:id', component: RiskSummaryTabComponent},
    { path: 'submission', component: SubmissionComponent},
    { path: 'raters', component: RaterTableComponent},
    { path: 'search', component: AccountSearchComponent},
    { path: 'NewBrokerFormComponent', component: NewBrokerFormComponent},
];
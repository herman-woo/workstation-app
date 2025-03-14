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
    { path: 'account/:id', component: AccountComponent},
    { path: 'account/risksummary/:id', component: RiskSummaryTabComponent},
    { path: 'submission', component: SubmissionComponent},
    { path: 'search', component: AccountSearchComponent},
    { path: 'NewBrokerFormComponent', component: NewBrokerFormComponent},
];

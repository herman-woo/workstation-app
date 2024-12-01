import { Routes } from '@angular/router';
import { AccountComponent } from './routes/account/account.component';
import { DashboardComponent } from './routes/dashboard/dashboard.component';
import { UnderwriterRecordComponent } from './routes/underwriter-record/underwriter-record.component';
import { UnderwriterListComponent } from './routes/underwriter-list/underwriter-list.component';
import { NamedInsuredsListComponent } from './routes/named-insureds-list/named-insureds-list.component';
import { NamedInsuredRecordComponent } from './routes/named-insured-record/named-insured-record.component';
import { BrokerListComponent } from './routes/broker-list/broker-list.component';
import { BrokerRecordComponent } from './routes/broker-record/broker-record.component';
import { BrokerCompaniesListComponent } from './routes/broker-companies-list/broker-companies-list.component';
import { RiskSummaryTabComponent } from './routes/account/account-tabs/risk-summary-tab/risk-summary-tab.component';
import { CompanyRecordComponent } from './routes/company-record/company-record.component';

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
    { path: 'account/risksummary/:id', component: RiskSummaryTabComponent}
];

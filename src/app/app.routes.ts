import { Routes } from '@angular/router';
import { AccountComponent } from './routes/account/account.component';
import { DashboardComponent } from './routes/dashboard/dashboard.component';
import { UnderwriterComponent } from './routes/records/underwriter/underwriter.component';
import { UnderwriterReferencePagesComponent } from './routes/lists/underwriter-reference-pages/underwriter-reference-pages.component';
import { NamedInsuredsReferencePageComponent } from './routes/lists/named-insureds-reference-page/named-insureds-reference-page.component';
import { NamedInsuredComponent } from './routes/records/named-insured/named-insured.component';
import { BrokerAgentsReferencePageComponent } from './routes/lists/broker-agents-reference-page/broker-agents-reference-page.component';
import { BrokerComponent } from './routes/records/broker/broker.component';
import { BrokerCompaniesReferencePageComponent } from './routes/lists/broker-companies-reference-page/broker-companies-reference-page.component';
import { RiskSummaryComponent } from './routes/account/account-tabs/risk-summary/risk-summary.component';
import { CompanyComponent } from './routes/records/company/company.component';

export const routes: Routes = [
    //main page references
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent},
    { path: 'underwriters', component: UnderwriterReferencePagesComponent},
    { path: 'underwriter', redirectTo: '/insureds', pathMatch: 'full' },
    { path: 'underwriter/:id', component: UnderwriterComponent},
    { path: 'insureds', component: NamedInsuredsReferencePageComponent},
    { path: 'insured', redirectTo: '/insureds', pathMatch: 'full' },
    { path: 'insured/:id', component: NamedInsuredComponent},
    { path: 'brokers', component: BrokerAgentsReferencePageComponent},
    { path: 'broker', redirectTo: '/brokers', pathMatch: 'full' },
    { path: 'broker/:id', component: BrokerComponent},
    { path: 'brokercompanies', component: BrokerCompaniesReferencePageComponent},
    { path: 'brokercompany', redirectTo: '/brokercompanies', pathMatch: 'full' },
    { path: 'brokercompany/:id', component: CompanyComponent},
    { path: 'account/:id', component: AccountComponent},
    { path: 'account/risksummary/:id', component: RiskSummaryComponent}
];

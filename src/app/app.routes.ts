import { Routes } from '@angular/router';
import { AccountComponent } from '../pages/record-pages/account/account.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { UnderwriterReferencePagesComponent } from '../pages/reference-pages/underwriter-reference-pages/underwriter-reference-pages.component';
import { UnderwriterComponent } from '../pages/record-pages/underwriter/underwriter.component';
import { NamedInsuredsReferencePageComponent } from '../pages/reference-pages/named-insureds-reference-page/named-insureds-reference-page.component';
import { BrokerAgentsReferencePageComponent } from '../pages/reference-pages/broker-agents-reference-page/broker-agents-reference-page.component';
import { BrokerCompaniesReferencePageComponent } from '../pages/reference-pages/broker-companies-reference-page/broker-companies-reference-page.component';
import { NamedInsuredComponent } from '../pages/record-pages/named-insured/named-insured.component';
import { BrokerComponent } from '../pages/record-pages/broker/broker.component';
import { CompanyComponent } from '../pages/record-pages/company/company.component';
import { RiskSummaryComponent } from '../modules/risk-summary/risk-summary.component';

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

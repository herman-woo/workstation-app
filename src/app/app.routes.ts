import { Routes } from '@angular/router';
import { AccountComponent } from './pages/account/account.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NamedInsuredsReferencePageComponent } from './pages/reference/named-insureds-reference-page/named-insureds-reference-page.component';
import { BrokerAgentsReferencePageComponent } from './pages/reference/broker-agents-reference-page/broker-agents-reference-page.component';
import { BrokerCompaniesReferencePageComponent } from './pages/reference/broker-companies-reference-page/broker-companies-reference-page.component';
import { NamedInsuredComponent } from './pages/named-insured/named-insured.component';

export const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // Default route (optional)
    { path: 'account/:id', component: AccountComponent},
    { path: 'dashboard', component: DashboardComponent},
    { path: 'insureds', component: NamedInsuredsReferencePageComponent},
    { path: 'insured/:id', component: NamedInsuredComponent},
    { path: 'brokeragents', component: BrokerAgentsReferencePageComponent},
    { path: 'brokercompanies', component: BrokerCompaniesReferencePageComponent}
];

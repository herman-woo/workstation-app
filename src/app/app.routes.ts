import { Routes } from '@angular/router';
import { AccountComponent } from './pages/record-pages/account/account.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NamedInsuredsReferencePageComponent } from './pages/reference-pages/named-insureds-reference-page/named-insureds-reference-page.component';
import { BrokerAgentsReferencePageComponent } from './pages/reference-pages/broker-agents-reference-page/broker-agents-reference-page.component';
import { BrokerCompaniesReferencePageComponent } from './pages/reference-pages/broker-companies-reference-page/broker-companies-reference-page.component';
import { NamedInsuredComponent } from './pages/record-pages/named-insured/named-insured.component';
import { BrokerComponent } from './pages/record-pages/broker/broker.component';

export const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent},
    { path: 'insureds', component: NamedInsuredsReferencePageComponent},
    { path: 'insured', redirectTo: '/insureds', pathMatch: 'full' },
    { path: 'insured/:id', component: NamedInsuredComponent},
    { path: 'brokers', component: BrokerAgentsReferencePageComponent},
    { path: 'broker', redirectTo: '/brokers', pathMatch: 'full' },
    { path: 'broker/:id', component: BrokerComponent},
    { path: 'brokercompanies', component: BrokerCompaniesReferencePageComponent},
    { path: 'account/:id', component: AccountComponent}
];

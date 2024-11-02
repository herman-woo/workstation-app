import { Routes } from '@angular/router';
import { AccountComponent } from './pages/account/account.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default route (optional)
    { path: 'account/:id', component: AccountComponent},
    { path: 'dashboard', component: DashboardComponent}
];

import {Routes} from "@angular/router";
import {AdminPanelComponent} from "./layout/admin-panel/admin-panel.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {HelpComponent} from "./help/help.component";
import {SettingsComponent} from "./settings/settings.component";

export const APP_ROUTES:Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: '',
    component: AdminPanelComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'commodity', loadChildren: './commodity-pricing/commodity-pricing.module#CommodityPricingModule' },
      { path: 'requests', loadChildren: './requests/requests.module#RequestsModule' },
      { path: 'payments', loadChildren: './payment-transactions/payment-transactions.module#PaymentTransactionsModule' },
      { path: 'customers', loadChildren: './customers/customers.module#CustomersModule' },
      { path: 'users', loadChildren: './users/users.module#UsersModule' },
      { path: 'reports', loadChildren: './reports/reports.module#ReportsModule' },
      { path: 'help', component: HelpComponent },
      { path: 'settings', component: SettingsComponent }
    ]
  }
]

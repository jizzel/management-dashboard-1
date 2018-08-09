import {Routes} from "@angular/router";
import {AdminPanelComponent} from "./layout/admin-panel/admin-panel.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {HelpComponent} from "./help/help.component";
import {SettingsComponent} from "./settings/settings.component";
import {LoginPanelComponent} from "./layout/login-panel/login-panel.component";
import {LoginComponent} from "./login/login.component";
import {AuthGuard} from "./app-services/auth-guard.service";
import {ForgotPasswordComponent} from "./forgot-password/forgot-password.component";

export const APP_ROUTES:Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: '',
    component: AdminPanelComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'commodity', loadChildren: './commodity-pricing/commodity-pricing.module#CommodityPricingModule', canActivate: [AuthGuard] },
      { path: 'requests', loadChildren: './requests/requests.module#RequestsModule', canActivate: [AuthGuard] },
      { path: 'payments', loadChildren: './payment-transactions/payment-transactions.module#PaymentTransactionsModule', canActivate: [AuthGuard] },
      { path: 'customers', loadChildren: './customers/customers.module#CustomersModule', canActivate: [AuthGuard] },
      { path: 'users', loadChildren: './users/users.module#UsersModule', canActivate: [AuthGuard] },
      { path: 'reports', loadChildren: './reports/reports.module#ReportsModule', canActivate: [AuthGuard] },
      { path: 'setup', loadChildren: './setup/setup.module#SetupModule', canActivate: [AuthGuard] },
      { path: 'help', component: HelpComponent, canActivate: [AuthGuard] },
      { path: 'settings', component: SettingsComponent, canActivate: [AuthGuard] }
    ]
  },
  {
    path: '',
    component: LoginPanelComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'forgot-password', component: ForgotPasswordComponent }
    ]
  }
]

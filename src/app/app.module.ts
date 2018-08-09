import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AdminPanelComponent } from './layout/admin-panel/admin-panel.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {RouterModule} from "@angular/router";
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import {APP_ROUTES} from "./app.routing";
import { HelpComponent } from './help/help.component';
import { SettingsComponent } from './settings/settings.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Location, HashLocationStrategy, LocationStrategy} from '@angular/common';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { LoginPanelComponent } from './layout/login-panel/login-panel.component';
import { LoginComponent } from './login/login.component';
import {MaterialsModule} from "./materials.module";
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import {HttpClientModule} from "@angular/common/http";
import {AuthService} from "./app-services/auth-service.service";
import {AuthGuard} from "./app-services/auth-guard.service";


@NgModule({
  declarations: [
    AppComponent,
    AdminPanelComponent,
    DashboardComponent,
    SideBarComponent,
    HeaderComponent,
    FooterComponent,
    HelpComponent,
    SettingsComponent,
    LoginPanelComponent,
    LoginComponent,
    ForgotPasswordComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(APP_ROUTES),
    MaterialsModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    Location, {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SetupComponent } from './setup/setup.component';
import {SETUP_ROUTING} from "./setup.routing";
import {RouterModule} from "@angular/router";
import { CommodityComponent } from './commodity/commodity.component';
import { MarketComponent } from './market/market.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { UserRoleComponent } from './user-role/user-role.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(SETUP_ROUTING)
  ],
  declarations: [SetupComponent, CommodityComponent, MarketComponent, UserRoleComponent]
})
export class SetupModule { }

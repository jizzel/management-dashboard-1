import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersComponent } from './customers/customers.component';
import {RouterModule} from "@angular/router";
import {CUSTOMERS_ROUTES} from "./customers.routing";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(CUSTOMERS_ROUTES)
  ],
  declarations: [CustomersComponent]
})
export class CustomersModule { }

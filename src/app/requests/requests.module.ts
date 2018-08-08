import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestsComponent } from './requests/requests.component';
import {RouterModule} from "@angular/router";
import {REQUETS_ROUTES} from "./requests.routing";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { FarmerRequestComponent } from './farmer-request/farmer-request.component';
import { BuyerRequestComponent } from './buyer-request/buyer-request.component';
import { RequestHistoryComponent } from './request-history/request-history.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(REQUETS_ROUTES)
  ],
  declarations: [RequestsComponent, FarmerRequestComponent, BuyerRequestComponent, RequestHistoryComponent]
})
export class RequestsModule { }

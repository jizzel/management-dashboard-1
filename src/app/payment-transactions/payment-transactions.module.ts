import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentTransactionsComponent } from './payment-transactions/payment-transactions.component';
import {RouterModule} from "@angular/router";
import {PAYMENT_ROUTES} from "./payment.routing";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(PAYMENT_ROUTES)
  ],
  declarations: [PaymentTransactionsComponent]
})
export class PaymentTransactionsModule { }

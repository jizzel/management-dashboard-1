import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommodityPricingComponent } from './commodity-pricing/commodity-pricing.component';
import {RouterModule} from "@angular/router";
import {COMMODITY_ROUTES} from "./commodity.routing";
import { PricingHistoryComponent } from './pricing-history/pricing-history.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { NewPriceComponent } from './new-price/new-price.component';
import {MaterialsModule} from "../materials.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(COMMODITY_ROUTES)
  ],
  declarations: [CommodityPricingComponent, PricingHistoryComponent, NewPriceComponent]
})
export class CommodityPricingModule { }

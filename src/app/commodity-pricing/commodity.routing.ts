import {Routes} from "@angular/router";
import {CommodityPricingComponent} from "./commodity-pricing/commodity-pricing.component";
import {PricingHistoryComponent} from "./pricing-history/pricing-history.component";

export const COMMODITY_ROUTES: Routes = [

  { path: '', component: CommodityPricingComponent },
  { path: 'pricing-history', component: PricingHistoryComponent}

]

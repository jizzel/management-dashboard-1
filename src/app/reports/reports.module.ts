import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsComponent } from './reports/reports.component';
import {RouterModule} from "@angular/router";
import {REPORTS_ROUTES} from "./reports.routing";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(REPORTS_ROUTES)
  ],
  declarations: [ReportsComponent]
})
export class ReportsModule { }

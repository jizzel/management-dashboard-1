import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SetupComponent } from './setup/setup.component';
import {SETUP_ROUTING} from "./setup.routing";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(SETUP_ROUTING)
  ],
  declarations: [SetupComponent]
})
export class SetupModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import {RouterModule} from "@angular/router";
import {USERS_ROUTES} from "./users.routing";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(USERS_ROUTES)
  ],
  declarations: [UsersComponent]
})
export class UsersModule { }

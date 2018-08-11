import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import {RouterModule} from "@angular/router";
import {USERS_ROUTES} from "./users.routing";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { NewUserComponent } from './new-user/new-user.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild(USERS_ROUTES)
  ],
  declarations: [UsersComponent, NewUserComponent]
})
export class UsersModule { }

import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { UserLoginComponent } from './user-login/user-login.component';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [
    UserRegistrationComponent,
    UserLoginComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  exports:[
  ]
})
export class UsersModule { }

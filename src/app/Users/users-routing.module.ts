import { UserLoginComponent } from './UserLogin/user-login.component';
import { UserRegistrationComponent } from './UserRegistration/user-registration.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {path:'register',component:UserRegistrationComponent },
    {path:'login',component:UserLoginComponent },

  ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class UsersRoutingModule { }

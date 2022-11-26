import { UserRegistrationComponent } from './Users/UserRegistration/user-registration.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'register', component:UserRegistrationComponent },
  {
    canActivate:[AuthGuard],
    path: 'home',
    loadChildren: () => import('./Home/home.module').then(module => module.HomeModule)
  },
  // { path: '**', redirectTo:'/login',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

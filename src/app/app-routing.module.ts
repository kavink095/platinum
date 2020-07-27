import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserSignComponent } from './user-sign/user-sign.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserotpComponent } from './userotp/userotp.component';


const routes: Routes = [
  {path: 'sign', component : UserSignComponent},
  {path: 'login', component : UserLoginComponent},
  {path: 'otp', component : UserotpComponent},
  { path: '', redirectTo: '/sign', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

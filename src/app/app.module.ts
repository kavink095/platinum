import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserSignComponent } from './user-sign/user-sign.component';

import { ReactiveFormsModule, FormGroup, FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { UserLoginComponent } from './user-login/user-login.component';
import {UserService} from '../app/service/user-service';
import { UserotpComponent } from './userotp/userotp.component';

@NgModule({
  declarations: [
    AppComponent,
    UserSignComponent,
    UserLoginComponent,
    UserotpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

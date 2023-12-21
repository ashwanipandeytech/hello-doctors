import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account.component';
import { SigninComponent } from './signin.component';
import { RegisterComponent } from './register.component';


@NgModule({
  declarations: [
    AccountComponent,
    SigninComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule
  ]
})
export class AccountModule { }

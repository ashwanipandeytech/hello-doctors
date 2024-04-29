import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SigninComponent } from './signin.component';
import { RegisterComponent } from './register.component';
import { AccountComponent } from './account.component';

const routes: Routes = [
  {
    path: 'login',
    component: SigninComponent
  }, {
    path: 'register',
    component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }

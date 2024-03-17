import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'account',
    
    loadChildren: () => import('./account/account.module').then(m => m.AccountModule),

  },
 
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),

  },
  {
    path: 'home',
   
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),

  },
  {
    path: 'doctors',
   
    loadChildren: () => import('./doctors/doctors.module').then(m => m.DoctorsModule),

  },
  {
    path: 'patient',
   
    loadChildren: () => import('./patient/patient.module').then(m => m.PatientModule),

  },
  {
    path: 'blogs',
   
    loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule),

  },
  {
    path: 'contact-us',
   
    loadChildren: () => import('./contact-us/contact-us.module').then(m => m.ContactUsModule),

  },
  {
    path: 'about-us',
   
    loadChildren: () => import('./about-us/about-us.module').then(m => m.AboutUsModule),

  },

  
  { path: '**', pathMatch: 'full', redirectTo: '404' },
  {
    path: '404', loadChildren: () => import('./pagenotfound/pagenotfound.module').then(m => m.PagenotfoundModule),

  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

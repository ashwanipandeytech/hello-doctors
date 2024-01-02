import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorsComponent } from './doctors.component';
import { AccountComponent } from '../account/account.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { AvailableTimingsComponent } from './available-timings/available-timings.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { MyPatientsComponent } from './my-patients/my-patients.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ScheduleTimingsComponent } from './schedule-timings/schedule-timings.component';
import { SocialMediaComponent } from './social-media/social-media.component';
import { DoctorProfileSettingsComponent } from './doctor-profile-settings/doctor-profile-settings.component';
import { DoctorChangePasswordComponent } from './doctor-change-password/doctor-change-password.component';
import { DoctorAccountComponent } from './doctor-account/doctor-account.component';
import { InvoiceViewComponent } from './invoice-view/invoice-view.component';

const routes: Routes = [
  {
    path: '',
    component: DoctorsComponent
  }, {
    path: 'account',
    component: DoctorAccountComponent
  }, {
    path: 'appointments',
    component: AppointmentsComponent
  }, {
    path: 'available-timing',
    component: AvailableTimingsComponent
  }, {
    path: 'profile-settings',
    component: DoctorProfileSettingsComponent
  }, {
    path: 'invoices',
    component: InvoicesComponent
  }, {
    path: 'invoice-view',
    component: InvoiceViewComponent
  }, {
    path: 'my-patients',
    component: MyPatientsComponent
  }, {
    path: 'reviews',
    component: ReviewsComponent
  }, {
    path: 'schedule-timings',
    component: ScheduleTimingsComponent
  }, {
    path: 'social-media',
    component: SocialMediaComponent
  }, {
    path: 'change-password',
    component: DoctorChangePasswordComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorsRoutingModule { }

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
    path: ':id',
    component: DoctorsComponent
  }, {
    path: 'account/:id',
    component: DoctorAccountComponent
  }, {
    path: 'appointments/:id',
    component: AppointmentsComponent
  }, {
    path: 'available-timing/:id',
    component: AvailableTimingsComponent
  }, {
    path: 'profile-settings/:id',
    component: DoctorProfileSettingsComponent
  }, {
    path: 'invoices/:id',
    component: InvoicesComponent
  }, {
    path: 'invoice-view/:id',
    component: InvoiceViewComponent
  }, {
    path: 'my-patients/:id',
    component: MyPatientsComponent
  }, {
    path: 'reviews/:id',
    component: ReviewsComponent
  }, {
    path: 'schedule-timings/:id',
    component: ScheduleTimingsComponent
  }, {
    path: 'social-media/:id',
    component: SocialMediaComponent
  }, {
    path: 'change-password/:id',
    component: DoctorChangePasswordComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorsRoutingModule { }

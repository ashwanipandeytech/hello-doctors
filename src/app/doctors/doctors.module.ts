import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorsRoutingModule } from './doctors-routing.module';
import { DoctorsComponent } from './doctors.component';
import { ProfileSidebarComponent } from './profile-sidebar/profile-sidebar.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { MyPatientsComponent } from './my-patients/my-patients.component';
import { ScheduleTimingsComponent } from './schedule-timings/schedule-timings.component';
import { AvailableTimingsComponent } from './available-timings/available-timings.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { DoctorProfileSettingsComponent } from './doctor-profile-settings/doctor-profile-settings.component';
import { SocialMediaComponent } from './social-media/social-media.component';
import { DoctorChangePasswordComponent } from './doctor-change-password/doctor-change-password.component';
import { DoctorAccountComponent } from './doctor-account/doctor-account.component';
import { InvoiceViewComponent } from './invoice-view/invoice-view.component';


@NgModule({
  declarations: [
    DoctorsComponent,
    ProfileSidebarComponent,
    AppointmentsComponent,
    MyPatientsComponent,
    ScheduleTimingsComponent,
    AvailableTimingsComponent,
    InvoicesComponent,
    ReviewsComponent,
    DoctorProfileSettingsComponent,
    SocialMediaComponent,
    DoctorChangePasswordComponent,
    DoctorAccountComponent,
    InvoiceViewComponent
  ],
  imports: [
    CommonModule,
    DoctorsRoutingModule
  ]
})
export class DoctorsModule { }

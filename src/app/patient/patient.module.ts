import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientRoutingModule } from './patient-routing.module';
import { PatientComponent } from './patient.component';
import { DependentComponent } from './dependent/dependent.component';
import { DoctorProfileComponent } from './doctor-profile/doctor-profile.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { PatientAccountsComponent } from './patient-accounts/patient-accounts.component';
import { PatientChangePasswordComponent } from './patient-change-password/patient-change-password.component';
import { PatientMedicalDetailsComponent } from './patient-medical-details/patient-medical-details.component';
import { PatientMedicalRecordsComponent } from './patient-medical-records/patient-medical-records.component';
import { PatientProfileSettingsComponent } from './patient-profile-settings/patient-profile-settings.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { OrdersListComponent } from './orders-list/orders-list.component';
import { ProfileSidebarComponent } from './profile-sidebar/profile-sidebar.component';


@NgModule({
  declarations: [
    PatientComponent,
    DependentComponent,
    DoctorProfileComponent,
    FavouritesComponent,
    PatientAccountsComponent,
    PatientChangePasswordComponent,
    PatientMedicalDetailsComponent,
    PatientMedicalRecordsComponent,
    PatientProfileSettingsComponent,
    ChangePasswordComponent,
    OrdersListComponent,
    ProfileSidebarComponent
  ],
  imports: [
    CommonModule,
    PatientRoutingModule
  ]
})
export class PatientModule { }

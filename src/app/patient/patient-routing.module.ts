import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientComponent } from './patient.component';
import { DependentComponent } from './dependent/dependent.component';
import { DoctorsComponent } from '../doctors/doctors.component';
import { DoctorProfileComponent } from './doctor-profile/doctor-profile.component';
import { PatientProfileSettingsComponent } from './patient-profile-settings/patient-profile-settings.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { PatientMedicalDetailsComponent } from './patient-medical-details/patient-medical-details.component';
import { PatientMedicalRecordsComponent } from './patient-medical-records/patient-medical-records.component';
import { OrdersListComponent } from './orders-list/orders-list.component';

const routes: Routes = [
  {
    path: '',
    component: PatientComponent
  }, {
    path: 'doctor-profile',
    component: DoctorProfileComponent
  }, {
    path: 'profile-settings',
    component: PatientProfileSettingsComponent
  }, {
    path: 'change-password',
    component: ChangePasswordComponent
  }, {
    path: 'medical-details',
    component: PatientMedicalDetailsComponent
  }, {
    path: 'medical-records',
    component: PatientMedicalRecordsComponent
  }, {
    path: 'orders-list',
    component: OrdersListComponent
  }, {
    path: 'dependent',
    component: DependentComponent
  }, {
    path: 'favourites',
    component: FavouritesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientRoutingModule { }

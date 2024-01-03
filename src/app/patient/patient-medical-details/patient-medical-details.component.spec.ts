import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientMedicalDetailsComponent } from './patient-medical-details.component';

describe('PatientMedicalDetailsComponent', () => {
  let component: PatientMedicalDetailsComponent;
  let fixture: ComponentFixture<PatientMedicalDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PatientMedicalDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PatientMedicalDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

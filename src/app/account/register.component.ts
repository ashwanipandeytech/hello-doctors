import { Component, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Globals } from '@src/app/shared/globals';
import { DataService } from '@src/app/services/data-service.service'
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-register',

  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {
  name: any = '';
  mobileNo: any = '';
  email: any = ''
  password: any = '';
  isDoctor:boolean=false;
  isLoading: boolean;
  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);

  constructor(private router: Router, private dataService: DataService, private toastr: ToastrService) {

  }

  ngOnInit(): void {


  }
  ;
  submitForm() {

    let requestPayload = {
      name: this.name,
      mobileNo: this.mobileNo,
      email: this.email,
      password: this.password,
      userType:(this.isDoctor)?'D':'P'
    }

   


    this.dataService.callApi(requestPayload, 'register',true)
      .pipe(takeUntil(this.destroyed$))
      .subscribe(
        (data) => {
          this.isLoading = false;

          if (data.success) {
            this.router.navigate(['/login']);
          } else {
            this.toastr.error('Error in registration');
          }
         
        },
        (error:any) => {
          const errorDetails = error.error;
       
        //  console.error('API Error:', error,errorDetails.message);
          this.toastr.error(errorDetails.message);
        
        }
      );






  }


}

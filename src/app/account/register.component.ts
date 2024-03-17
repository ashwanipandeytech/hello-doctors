import { Component, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Globals } from '@src/app/shared/globals';
import { DataService } from '@src/app/services/data-service.service'
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

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

    var specialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    var mobileRegex = /^[6-9]\d{9}$/;

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


    if (requestPayload.name == '') {

      this.toastr.error('Please enter your name.');
      return false;
    } else if (specialChars.test(requestPayload.name)) {

      this.toastr.error('Name should not contain special characters.', 'Error');
      return false;
    }

    else if (!mobileRegex.test(requestPayload.mobileNo)) {
      // If mobile number is not in Indian mobile number format, show toastr notification
      this.toastr.error('Please enter a valid  mobile number.', 'Error');
      return false;
    }

    // Check if the email matches the email regular expression
    else if (!emailRegex.test(requestPayload.email)) {
      this.toastr.error('Please enter a valid  email address.', 'Error');
      return false;
    }
    else if (requestPayload.password == '') {

      this.toastr.error('Password should not be blank.');
      return false;
    }


    this.dataService.callApi(requestPayload, 'register')
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
        (error) => {

          console.error('API Error:', error);
          this.toastr.error('An error occurred while processing your request.');
          this.isLoading = false; // Set isLoading to false to handle loading state
        }
      );






  }


}

import { Component, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Globals } from '@src/app/shared/globals';
import { DataService } from '@src/app/services/data-service.service'
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CommonService } from '../services/commonservice';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss'
})
export class SigninComponent implements OnInit {
  name: any = '';
  email:any='';
  mobileNo: any = '';
  password: any = '';
  
  isLoading: boolean;
  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);

  constructor(private router: Router, private dataService: DataService, private toastr: ToastrService,private commonservice:CommonService) {
    
  }

  ngOnInit(): void {


  };
  submitForm() {
    let requestPayload = {
      name: this.name,
      mobileNo: this.mobileNo,
      email:this.email,
      password: this.password
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


    if (requestPayload.email == '' ) {

      this.toastr.error('Please enter your Email.');
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

   
    this.dataService.callApi(requestPayload, 'login',true)
    .pipe(takeUntil(this.destroyed$))
    .subscribe(
      (data:any) => {
        this.isLoading = false;
  
        if (data.success) {
          if(data.data){           
            localStorage.setItem('user', JSON.stringify(data.data));
            this.toastr.success('Logged in Successfully!');
            this.commonservice.emitUser(data.data)

          }
          if(data.data.userType=='P'){
             this.router.navigate(['/doctor/'+data.data.id]);

          }else if(data.data.userType=='D'){
            // this.router.navigate(['/login']);
          }
        
         
        } else {
          this.toastr.error('Error in registration');
        }
      },
      (error:any) => {
        const errorDetails = error.error;
     this.isLoading=false
      //  console.error('API Error:', error,errorDetails.message);
        this.toastr.error(errorDetails.message);
      
      }
    );
  





  }


}


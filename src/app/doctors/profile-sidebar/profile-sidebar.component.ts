import { Component, afterNextRender } from '@angular/core';
import { OnInit } from '@angular/core';
import { CommonService } from '../../services/commonservice';
import { ReplaySubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID, Inject } from '@angular/core';

@Component({
  selector: 'app-profile-sidebar',
  templateUrl: './profile-sidebar.component.html',
  styleUrl: './profile-sidebar.component.scss'
})



export class ProfileSidebarComponent implements OnInit {
  user;
  userLoggedIn: boolean = true;
  
  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);

  constructor(private commonservice: CommonService,private router: Router,@Inject(PLATFORM_ID) private platformId: Object) {

    afterNextRender(() => {

      const storedData = localStorage.getItem('user');
      if (storedData) {
        try {
          this.user =JSON.parse(storedData);
            if (this.user && this.user!=null && this.user!='') {
              this.userLoggedIn = true;
            }else{
              this.userLoggedIn=false
            }
        }
        catch (err) {
        }
      }
    });

    this.commonservice.$userLoggedIn
      .pipe(takeUntil(this.destroyed$))
      .subscribe(
        (data: any) => {

          this.user = data;
          this.userLoggedIn = true;

        },

      );

  }
  ngOnInit(): void {
  

  }
 
  logout(){
    console.info('test')
    localStorage.clear();
    this.router.navigate(['/account/login']);
  }


}


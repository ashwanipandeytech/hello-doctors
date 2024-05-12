import { Component, OnInit, afterNextRender } from '@angular/core';
import { CommonService } from './services/commonservice';
import { ReplaySubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID, Inject } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  user;
  userLoggedIn: boolean = true
  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);

  constructor(private commonservice: CommonService,@Inject(PLATFORM_ID) private platformId: Object) {
    afterNextRender(() => {

      const storedData = localStorage.getItem('user');
      console.info(storedData)
      if (storedData!=null) {
        try {
          this.user =JSON.parse(storedData);
            if (this.user && this.user!=null && this.user!='') {
              this.userLoggedIn = true;
            }else{
              this.userLoggedIn=false
            }
        }
        catch (err) {
          this.userLoggedIn=false
        }
      }
      else{
        this.userLoggedIn=false
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
  
  


}

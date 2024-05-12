
import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '@src/environments/environment';
import { Commonresponseobject } from '@src/app/shared/models'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
 
 $userLoggedIn = new EventEmitter();
  constructor(private http: HttpClient) { }

  emitUser(data: any) {
    this.$userLoggedIn.emit(data.userName);
  }



}
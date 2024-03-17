
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '@src/environments/environment';
import { Commonresponseobject } from '@src/app/shared/models'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // userid = JSON.parse(localStorage.getItem('user'))['ID'];
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'

    })
  };
  constructor(private http: HttpClient) { }

  isAuthenticated() {
    if (localStorage.getItem('user') && JSON.parse(localStorage.getItem('user'))['ID'] != '') {
      return { validUser: true, redirectTologin: false };
    }
    else if (localStorage.getItem('user-unauthorised') == 'YES') {
      return { validUser: false, redirectTologin: false };
    }
    else {
      return { validUser: true, redirectTologin: true };
    }
  }
  callApi(data, apiEndPoint, isFrontEnd = false) {
    const requestPayload = {
      application: environment[window['environmentType']].APPLICATION,
      version: environment[window['environmentType']].VERSION,
      data
    };

    let apiUrl;
    if (isFrontEnd) {
      apiUrl = environment[window['environmentType']].FRONT_END_API_URL;
    } else {
      apiUrl = environment[window['environmentType']].API_URL;
    }
    return this.http.post<Commonresponseobject>(apiUrl + apiEndPoint, requestPayload, this.httpOptions);
  }
  uploadVideo(data): Observable<any> {
    let apiUrl;
    apiUrl = environment[window['environmentType']].API_URL;
    const formData = new FormData();
    formData.append('videosrc', data.file);
    formData.append('userId', data.userId);
    formData.append('oemCode', data.oemCode);
    formData.append('groupCode', data.groupCode);
    formData.append('productCode', data.productCode);

    return this.http.post(apiUrl + 'upload-video', formData);
  }

}
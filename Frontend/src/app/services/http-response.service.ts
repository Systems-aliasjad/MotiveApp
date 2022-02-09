import { Injectable } from '@angular/core';
import { BackendService } from '../services/backend.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpResponseService {
   httpStatusCode:string='';

  constructor(private http: HttpClient, private backendService: BackendService) {
  }

  setHttpResponseCode(value){
     this.httpStatusCode=value;
  }
  getHttpResponseCode(){
    return this.httpStatusCode;
  }

  LogDataResponse(data){
    var newData={
      httpStatusCode:this.getHttpResponseCode(),
      responseJson:data
    }
    this.backendService.LogDataResponse(newData).subscribe(() => {});
  }
}

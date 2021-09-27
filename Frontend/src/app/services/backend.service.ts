import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BackendService {
  constructor(public http: HttpClient) {}

  getUserDetail() {
    return this.http.get('http://10.51.106.150:7001/MOTIVE_APP_SELFCARE/token?lang=ar', { headers: { Authorization: `Bearer KKnKASBiRKMbsHvOMzcEwQjGjqeN7iscdkoft/AGsMI=` } });
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';

import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BackendService {
  constructor(public http: HttpClient) {}

  getUserDetail(token: string, lang: string) {
    return this.http.get(`token?lang=${lang}`, { headers: { Authorization: `Bearer ${token}` } });
  }

  getUserDetailFromAccountId(accountId) {
    return this.http.get(`token?lang=en&account-id=${accountId}`, { headers: { Authorization: `Bearer KKnKASBiRKMbsHvOMzcEwYmDLDnuPQnDzIHH5U1T358=` } });
  }

  getLandingPageData() {
    return this.http.get(`motive/landing-screen`);
  }

  getIssueDiagnositic(forIssue: string) {
    return this.http.get(`motive/troubleshoot/${forIssue}`);
  }

  nextSignal(signal: 'MandatoryOnly' | 'DontReboot' | 'Agree') {
    return this.http.put(`motive/troubleshoot/next-step`, { signal: signal });
  }

  bookComplaint(data) {
    if (environment.shouldCallAPI) {
      return this.http.put(`motive/troubleshoot/book-complaint`, data);
    } else {
      const response = { result: { responseData: { referenceNo: '4365298739', dateOfVisit: 'Jul 10 2019, 10:30 AM', status: '--' } } };
      return new Observable<object>((subscriber: Subscriber<object>) => subscriber.next(new Object())).pipe(map((o) => response));
    }
  }

  upsellRequest(data) {
    return this.http.put(`motive/troubleshoot/upsell`, data);
  }

  resetWifiPassword(data) {
    return this.http.put(`motive/troubleshoot/reset-wifi-password`, { ...data });
  }

  resetRouter(data) {
    return this.http.put(`motive/troubleshoot/next-step`, data);
  }

  rebootMyDevice(DeviceToReeboot: string) {
    return this.http.get(`motive/troubleshoot/reboot/${DeviceToReeboot}`);
  }
}

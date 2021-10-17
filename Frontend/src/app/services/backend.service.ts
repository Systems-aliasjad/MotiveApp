import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BackendService {
  constructor(public http: HttpClient) {}

  getUserDetail(token: string, lang: string) {
    return this.http.get(`token?lang=${lang}`, { headers: { Authorization: `Bearer ${token}` } });
  }

  getUserDetailFromAccountId(accountId) {
    return this.http.get(`?accountId=${accountId}`);
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
    return this.http.put(`motive/troubleshoot/book-complaint`, data);
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

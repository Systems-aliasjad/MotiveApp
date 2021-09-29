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

  getLandingPageData() {
    return this.http.get(`motive/landing-screen`);
  }

  getIssueDiagnositic(forIssue: string) {
    return this.http.get(`motive/troubleshoot/${forIssue}`);
  }
}

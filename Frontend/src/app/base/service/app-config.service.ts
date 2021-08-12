import { Injectable } from '@angular/core';
import { HttpClient, HttpBackend } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {
  private appConfig;
  private http: HttpClient;

  constructor(handler: HttpBackend) {
    this.http = new HttpClient(handler);
  }

  loadAppConfig() {
    return this.http
      .get('./assets/data/appConfig.json', { responseType: 'json' })
      .toPromise()
      .then((data) => {
        this.appConfig = data;
      });
  }

  getConfig(key) {
    return this.appConfig[key];
  }
}

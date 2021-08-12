import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { OktaAuthService } from '@okta/okta-angular';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class HttpClientInterceptor implements HttpInterceptor {
  constructor(private oktaAuth: OktaAuthService) { }
  // intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  //     const secureReq = req.clone({
  //        // url: req.url.replace('http://', 'https://'),
  //     });
  //     console.info('interceptor invoked!');
  //     return next.handle(secureReq);
  // }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!this.oktaAuth.isAuthenticated()) {
      return next.handle(request);
    }
    // return this.isAuthenticated().pipe(
    //   mergeMap((isAuthenticated) => {
    //     if (!isAuthenticated) {
    //       return next.handle(request);
    //     }
    // return 
    // this.getAccessToken().pipe(
    //   mergeMap((accessToken) => {
    const accessToken = this.oktaAuth.getAccessToken();
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${accessToken}`
      }
    });
    return next.handle(request);
    // })
    // );
    //   })
    // );
  }
  // private isAuthenticated(): Observable<boolean> {
  //   return from(this.oktaAuth.isAuthenticated());
  // }

  // private async getAccessToken(): string {
  //   const res = await this.oktaAuth.getAccessToken();
  //   return res;
  // }

}

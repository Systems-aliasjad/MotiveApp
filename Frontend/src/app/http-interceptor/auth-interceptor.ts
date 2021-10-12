import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { environment } from 'src/environments/environment';
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private auth: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Get the auth token from the service.
    let myReq;
    const baseUrl = environment.API_BASE_URL;
    /**
     * Ingores the request for the static angular file - Images
     */
    if (req.url.includes('assets')) {
      myReq = req;
    } else if (req.url.includes('token')) {
      /**
       *  For First API call when Motive App loads form the CIT
       */
      myReq = req.clone({ url: `${baseUrl}${req.url}` });
    } else {
      /**
       * All other API Calls should execute the following logic and add common auth token
       */
      const authToken: string = this.auth.getAuthorizationToken();
      myReq = req.clone({ url: `${baseUrl}${req.url}`, setHeaders: { Authorization: `Bearer ${authToken}` } });
    }

    return next.handle(myReq).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          console.log('Response event--->>>', event.status);
        }
        return event;
      })
    );
  }
}

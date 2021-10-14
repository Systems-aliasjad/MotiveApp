import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { environment } from 'src/environments/environment';
import { MessageService } from '../services/message.service';
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private auth: AuthService, private router: Router, private messenger: MessageService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const started = Date.now();
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
          console.log('response--->>>', event);
        }
        this.logRequest(started, req, 'ok');
        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        this.logRequest(started, req, 'error');

        if (error.status === 500) {
          this.router.navigate(['/unknown-issue']);
        } else {
          this.router.navigate(['/unknown-error']);
        }

        return throwError(error);
      })
    );
  }

  logRequest(started, req, status) {
    const elapsed = Date.now() - started;
    const msg = `${req.method} "${req.urlWithParams}" ${status} in ${elapsed} ms.`;
    this.messenger.add(msg);
  }
}

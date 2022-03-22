import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { environment } from 'src/environments/environment';
import { HttpResponseService } from '../services/http-response.service';
import { MessageService } from '../services/message.service';
import { flowCodes } from '../shared/constants/constants';
@Injectable()
export class AuthInterceptor implements HttpInterceptor {

 byPassLogResponse:boolean=false;

  constructor(private httpResponseCodeService:HttpResponseService, private auth: AuthService, private router: Router, private messenger: MessageService) {}

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
      
       if(myReq?.url?.match('motive/troubleshoot/book-complaint') || myReq?.url?.match('error')){
         this.byPassLogResponse=true;
       }
    }

    return next.handle(myReq).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          console.log('response--->>>', event);
          this.logRequest(started, req, 'ok');

           ////Log Http status in shared service
           if(!this.byPassLogResponse)
           {
              this.httpResponseCodeService.setHttpResponseCode(event?.status);
           }
          
          
          if(event?.body?.result?.screenCode===flowCodes.E2ECRM11)
          {
            if(!this.byPassLogResponse)
           {
            this.httpResponseCodeService.LogDataResponse(event?.body);
           }
            this.router.navigate(['/unknown-issue']);
          }
          
        }
        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        this.logRequest(started, req, 'error');

        ////Log Http status in shared service
        if(!this.byPassLogResponse)
           {
              this.httpResponseCodeService.setHttpResponseCode(error?.status);
           }
       

        if (this.router.url.match('thanks')) {
        } else if (error?.status === 500 || error?.status === 0) {
           if(!this.byPassLogResponse)
           {
           this.httpResponseCodeService.LogDataResponse(error);
           }
          this.router.navigate(['/unknown-issue']);
        } else {
           if(!this.byPassLogResponse)
           {
          this.httpResponseCodeService.LogDataResponse(error);
           }
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

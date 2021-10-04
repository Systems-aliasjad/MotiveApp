import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { environment } from 'src/environments/environment';
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private auth: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // Get the auth token from the service.
    const baseUrl = environment.API_BASE_URL;
    /**
     * Ingores the request for the static angular file - Images
     */
    if (req.url.includes('assets')) {
      return next.handle(req);
    } else if (req.url.includes('MOTIVE_APP_SELFCARE/token')) {
      /**
       *  For First API call when Motive App loads form the CIT
       */
      const authReq = req.clone({ url: `${baseUrl}${req.url}` });
      return next.handle(authReq);
    } else {
      /**
       * All other API Calls should execute the following logic and add common auth token
       */
      const authToken: string = this.auth.getAuthorizationToken();
      const authReq = req.clone({ url: `${baseUrl}${req.url}`, setHeaders: { Authorization: `Bearer ${authToken}` } });
      return next.handle(authReq);
    }
  }
}

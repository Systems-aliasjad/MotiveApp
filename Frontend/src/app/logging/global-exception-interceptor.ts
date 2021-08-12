import { ErrorHandler, Injectable } from '@angular/core';

@Injectable()
export class GlobalErrorInterceptor implements ErrorHandler {
    handleError(error: Response | any) {
        console.log('EXCEPTION INTERCEPTOR', error);
        if (error && error.rejection && error.rejection.status) {
            if (error.rejection.status === 401 || error.rejection.status === 403) {
                alert('Access Denied');
            }
        }
    }
}

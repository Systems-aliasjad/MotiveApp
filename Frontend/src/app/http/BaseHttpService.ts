import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';
// import { map } from 'rxjs/operators'
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, tap, share, map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class BaseHttpService {
    constructor(private http: HttpClient) { }

    getFile(url: string): Observable<any> {
        console.log('base service getFile: ', url);

        return this.http
            .get<any>(url, {
                headers: new HttpHeaders({
                    'Content-Type': 'application/json'
                }),
                responseType: 'blob' as 'json'
            })
            .pipe(
                tap(
                    (response) => {
                    },
                    (err) => {
                        return throwError(err);
                    }
                ),
                share(),
                catchError(this.handleErrorObservable)
            );
    }
    get(url: string): Observable<any> {
        console.log('base service get: ', url);
        // this.spinner.show();
        return this.http.get<any>(url).pipe(
            tap(
                (response) => {
                },
                (err) => {
                    return throwError(err);
                }
            ),
            share(),
            catchError(this.handleErrorObservable)
        );
    }
    post(url: string, model: any): Observable<any> {
        //   this.spinner.show();
        console.log('base service post: ', url);
        const body = JSON.stringify(model);
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        });
        const options = { headers };

        return this.http.post<any>(url, body, options).pipe(
            tap(
                (response) => {

                },
                (err) => {

                    return throwError(err);
                }
            ),
            catchError(this.handleErrorObservable)
        );
    }
    put(url: string, model: any): Observable<any> {
        //   this.spinner.show();
        console.log('base service post: ', url);
        const body = JSON.stringify(model);
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        });
        const options = { headers };

        return this.http.put<any>(url, body, options).pipe(
            tap(
                (response) => {

                },
                (err) => {

                    return throwError(err);
                }
            ),
            catchError(this.handleErrorObservable)
        );
    }


    delete(url: string): Observable<any> {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json; charset=utf-8',
            // Authorization: 'Basic ' + AppConfig.LoggedInUserProfile.User.UserName,
        });
        const options = { headers: headers };

    

        return this.http.delete(url, options).pipe(map(this.extractData),catchError(this.handleErrorObservable));
    }


    // tslint:disable-next-line: deprecation
    private extractData(res: Response) {
        const body = res;
        return body || {};
    }

    // tslint:disable-next-line: deprecation
    private handleErrorObservable(error: Response | any) {
        if (error.status === 401 || error.status === 403) {
            // alert('UnAuthorized');
        }

        // tslint:disable-next-line: deprecation
        return throwError(error);
    }
}

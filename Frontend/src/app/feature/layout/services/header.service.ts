import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, Observable } from 'rxjs';
import { BaseHttpService } from '../../../http/BaseHttpService';
import { ApiEndpoints } from '../../../shared/constants/api-endpoints';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  private title$ = new BehaviorSubject<string>('');
  private dbName$ = new BehaviorSubject<string>('');
  private serverName$ = new BehaviorSubject<string>('');
  private aboutClick$ = new BehaviorSubject<any>(null);

  constructor(private baseService: BaseHttpService) { }

  getTitle(): Observable<any> {
    return this.title$.asObservable();
  }
  setTitle(value: string) {
    this.title$.next(value);
  }
  getDbName(): Observable<any> {
    return this.dbName$.asObservable();
  }
  setDbName(value: string) {
    this.dbName$.next(value);
  }
  getServerName(): Observable<any> {
    return this.serverName$.asObservable();
  }
  setServerName(value: string) {
    this.serverName$.next(value);
  }
  // getSystemInfo(): Observable<any> {
  //  // return this.baseService.get(ApiEndpoints.URL_GetSystemInfo);
  // }
}

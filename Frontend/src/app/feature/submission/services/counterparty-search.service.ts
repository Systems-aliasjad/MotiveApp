import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseHttpService } from 'src/app/http/BaseHttpService';
import { ApiEndpoints } from 'src/app/shared/constants/api-endpoints';
import { ISearch } from '../models/search.model';

@Injectable({
  providedIn: 'root'
})
export class CounterpartySearchService {

  constructor(private baseService: BaseHttpService) {}

  getCounterPartySearchResults(modal: ISearch): Observable<any>{
    return this.baseService.post(`${ApiEndpoints.URL_GetCounterPartySearchResults}`, modal);
  }
  getCompanyInfo(): Observable<any>{
    return this.baseService.get(`${ApiEndpoints.URL_GetCompanyInfo}`);
  }

}

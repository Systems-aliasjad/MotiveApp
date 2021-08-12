import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseHttpService } from 'src/app/http/BaseHttpService';
import { ApiEndpoints } from 'src/app/shared/constants/api-endpoints';
import { ISearch } from '../models/search.model';

@Injectable({
    providedIn: 'root',
})
export class SubmissionService {
    constructor(private baseService: BaseHttpService) {}

    getSubmissionData(modal: ISearch): Observable<any> {
        return this.baseService.post(`${ApiEndpoints.URL_GetSubmissionResults}`, modal);
    }
    getSearchCount(modal: ISearch): Observable<any> {
        return this.baseService.post(`${ApiEndpoints.URL_GetSubmissionResultCount}`, modal);
    }
}

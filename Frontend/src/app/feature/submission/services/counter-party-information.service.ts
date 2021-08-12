import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { BaseHttpService } from 'src/app/http/BaseHttpService';
import { ApiEndpoints } from 'src/app/shared/constants/api-endpoints';

@Injectable({
    providedIn: 'root',
})
export class CounterPartyInformationService extends BaseHttpService {
    constructor(httpClient: HttpClient) {
        super(httpClient);
    }

    getCounterPartyDetails(ProducerBranchKey: number = 19486): Observable<any> {
        return this.get(`${ApiEndpoints.URL_GetCounterPartyDetails}?ProducerBranchKey=${ProducerBranchKey}`);
    }
}

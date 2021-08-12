import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseHttpService } from 'src/app/http/BaseHttpService';
import { ApiEndpoints } from 'src/app/shared/constants/api-endpoints';

@Injectable({
    providedIn: 'root',
})
export class CounterPartyExpandedNoteService extends BaseHttpService {
    constructor(httpClient: HttpClient) {
        super(httpClient);
    }

    getBankNotes(id: number = 17268): Observable<any> {
        return this.get(`${ApiEndpoints.URL_GetBankNotes}/${id}`);
    }
}

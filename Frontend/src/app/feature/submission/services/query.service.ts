import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseHttpService } from 'src/app/http/BaseHttpService';
import { ApiEndpoints } from 'src/app/shared/constants/api-endpoints';

@Injectable({
    providedIn: 'root',
})
export class QueryService extends BaseHttpService {
    constructor(httpClient: HttpClient) {
        super(httpClient);
    }

    getAllUsers() {
        return this.get(`${ApiEndpoints.URL_GetAllUserListLookup}`);
        //'https://localhost:44338/api/Lookup/GetAllUserListLookup');
    }

    getGroup1() {
        return this.get(`${ApiEndpoints.URL_GetCountryLOBCurrencyGroup}`);
        //'https://localhost:44338/api/Lookup/GetCountryLOBCurrencyGroup');
    }

    getGroup2() {
        return this.get(`${ApiEndpoints.URL_GetRptOffSubDptTrtyTypFnlDispStatsLyrTechAsistGrp}`);
        // 'https://localhost:44338/api/Lookup/GetRptOffSubDptTrtyTypFnlDispStatsLyrTechAsistGrp');
    }
}

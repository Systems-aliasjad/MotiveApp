import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseHttpService } from 'src/app/http/BaseHttpService';
import { ApiEndpoints } from 'src/app/shared/constants/api-endpoints';

@Injectable({
  providedIn: 'root'
})
export class BankAccountService {

  constructor(private baseService: BaseHttpService) {}

  getBankAccounts(producerBranchKey): Observable<any>{
    return this.baseService.get(`${ApiEndpoints.URL_GetBankDetails}?producerBranchKey=`+producerBranchKey);
  }
  getBankAccountHistory(accountKey): Observable<any>{
    return this.baseService.get(`${ApiEndpoints.URL_GetAccountHistory}?tableKey=`+accountKey);
  }

}

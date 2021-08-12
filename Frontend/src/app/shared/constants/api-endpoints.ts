import { environment } from '../../../environments/environment';

export class ApiEndpoints {
    public static URL_APIBase: string = environment.API_URL;
    public static URL_LookupBase: string = `${ApiEndpoints.URL_APIBase}Lookup/`;
    public static URL_GetSubmissionResults: string = `${ApiEndpoints.URL_APIBase}submission/Search`;
    public static URL_GetSubmissionResultCount: string = `${ApiEndpoints.URL_APIBase}Submission/SearchCount`;
    public static URL_GetAllUserListLookup: string = `${ApiEndpoints.URL_LookupBase}GetAllUserListLookup`;
    public static URL_GetCountryLOBCurrencyGroup: string = `${ApiEndpoints.URL_LookupBase}GetCountryLOBCurrencyGroup`;
    public static URL_GetRptOffSubDptTrtyTypFnlDispStatsLyrTechAsistGrp: string = `${ApiEndpoints.URL_LookupBase}GetRptOffSubDptTrtyTypFnlDispStatsLyrTechAsistGrp`;
    public static URL_GetCounterPartySearchResults: string = `${ApiEndpoints.URL_APIBase}CounterParty/Search`;
    public static URL_GetBankDetails: string = `${ApiEndpoints.URL_APIBase}CounterParty/GetBankDetail`;
    public static URL_GetCounterPartyDetails: string = `${ApiEndpoints.URL_APIBase}CounterParty/GetCounterPartyDetail`;
    public static URL_GetAccountHistory: string =`${ApiEndpoints.URL_APIBase}Audit/GetBankAuditHistory`;
    public static URL_GetBankNotes: string = `${ApiEndpoints.URL_APIBase}Bank/GetBankNotes`;
    public static URL_GetCompanyInfo: string = `${ApiEndpoints.URL_APIBase}CounterParty/GetCompanyInfo`;
}

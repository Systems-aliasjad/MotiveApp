import { Action } from '@ngrx/store';

export const GET_LOOKUP_RESULTS = 'GET_LOOKUP_RESULTS';
export const GET_LOOKUP_RESULTS_SUCCESS = 'GET_LOOKUP_RESULTS_SUCCESS';

export class GetLookupResults implements Action {
  readonly type = GET_LOOKUP_RESULTS;
  constructor() {}
}

export class GetLookupResultsSuccess implements Action {
  readonly type = GET_LOOKUP_RESULTS_SUCCESS;
  constructor(public payload: any) {}
}

export type AppActions = GetLookupResults | GetLookupResultsSuccess;

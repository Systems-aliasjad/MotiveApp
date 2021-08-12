import { lookupState } from '../state/lookupState';
import * as LookupActions from '../actions/app.actions';

const lookup: lookupState = { lookupResults: {} };

export function lookupReducer(state: lookupState = lookup, actions: LookupActions.AppActions): any {
  switch (actions.type) {
    case LookupActions.GET_LOOKUP_RESULTS:
      return state;

    case LookupActions.GET_LOOKUP_RESULTS_SUCCESS:
      console.log('in lookup reducer payload=', actions.payload);
      // const LookupState = {
      //   lookupResults: actions.payload
      // };
      return { ...state, lookupResults: actions.payload };
    default:
      return state;
  }
}

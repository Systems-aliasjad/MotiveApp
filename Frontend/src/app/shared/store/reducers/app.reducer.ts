import { ActionReducerMap } from '@ngrx/store';

import * as LookupReducer from './lookup.reducer';
import { lookupState } from '../state/lookupState';

export interface State {
  lookupReducer: lookupState;
}

export const reducers: ActionReducerMap<State> = {
  lookupReducer: LookupReducer.lookupReducer
};

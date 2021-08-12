// //import { Store, State } from '@ngrx/store';
// import { ISandBoxState } from '../shared/store/states/ISandBoxState';

// export abstract class TRCStoreAgent {
//     //protected loggedUser$ = this.appState$.select(store.getLoggedUser);
//     constructor(protected appState$: Store<ISandBoxState>) {}
//     /**
//      * Returns complete or partial state from the store
//      *
//      * @param store
//      * @param property
//      */
//     getState(store: Store<ISandBoxState>, property?: string): State<ISandBoxState> {
//         let state: State<ISandBoxState>;
//        // store.take(1).subscribe(s => (state = s.TRCGridState));
//         return property ? state[property] : state;
//     }
// }

import { Store, createStore, Action } from 'redux';

export type TacheronStoreType = Store<TacheronState>;

export interface TacheronState {

}

const initialState: TacheronState = {}

function reducer(state: TacheronState = initialState, action: Action) {
    return state;
}


export function createTacheronStore() {
    return createStore(reducer);
}
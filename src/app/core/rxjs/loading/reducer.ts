import { Action, createReducer, on } from '@ngrx/store';
import { setIsLoading } from './actions';
import { State, initialState } from './state';

export const Reducer = createReducer(
	initialState,
	on(setIsLoading, (state: State, data): State => {
		const counter = data.loading ? state.counter + 1 : state.counter - 1;
		return {
			...state,
			counter: counter,
			loading: counter <= 0 ? false : true,
		};
	}),
);

export const reducer = (state: State | undefined, action: Action) => Reducer(state, action);

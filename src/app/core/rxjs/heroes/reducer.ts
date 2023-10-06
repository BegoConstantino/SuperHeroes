import { Action, createReducer, on } from '@ngrx/store';
import { setDetail, setList } from './actions';
import { State, initialState } from './state';

export const Reducer = createReducer(
	initialState,
	on(
		setList,
		(state: State, data): State => ({
			...state,
			list: data.value,
		}),
	),
	on(
		setDetail,
		(state: State, data): State => ({
			...state,
			detail: data.value,
		}),
	),
);
export const reducer = (state: State | undefined, action: Action) => Reducer(state, action);

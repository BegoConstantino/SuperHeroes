import { Action, createReducer, on } from '@ngrx/store';
import { State, initialState } from './state';
import { deleteHero, setDetail, setList, updateHero } from './actions';
import { SuperHero } from '@core/models';

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
	on(updateHero, (state: State, data): State => {
		const newList: SuperHero[] = [...state.list];
		newList[data.index] = data.value;
		return {
			...state,
			list: newList,
		};
	}),
	on(deleteHero, (state: State, data): State => {
		const newList: SuperHero[] = [...state.list];
		newList.splice(data.index, 1);
		return {
			...state,
			list: newList,
		};
	}),
);
export const reducer = (state: State | undefined, action: Action) => Reducer(state, action);

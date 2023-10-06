import { ActionReducerMap } from '@ngrx/store';
import * as Loading from './loading/reducer';
import { State as LoadingState } from './loading/state';
import * as Heroes from './heroes/reducer';
import { State as HeroesState } from './heroes/state';

export interface State {
	loading: LoadingState;
	heroes: HeroesState;
}
export const reducers: ActionReducerMap<State> = {
	loading: Loading.reducer,
	heroes: Heroes.reducer,
};

import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from './state';

const selectIsLoadingState = createFeatureSelector<State>('loading');

export const selectIsLoading = createSelector(selectIsLoadingState, (state: State) => state.loading);

import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State as HeroesState } from './state';

const selectHeroesState = createFeatureSelector<HeroesState>('heroes');
export const getList = createSelector(selectHeroesState, (state: HeroesState) => state.list);

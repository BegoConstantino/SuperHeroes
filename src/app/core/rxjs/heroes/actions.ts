import { SuperHero } from '@core/models';
import { createAction, props } from '@ngrx/store';

const actionsTitle = '[Heroes]';

export const setList = createAction(`${actionsTitle} Set Heroes List`, props<{ value: SuperHero[] }>());
export const setDetail = createAction(`${actionsTitle} Set Heroe Detail`, props<{ value: SuperHero }>());
export const updateHero = createAction(`${actionsTitle} Update Heroe Detail`, props<{ index: number; value: SuperHero }>());
export const deleteHero = createAction(`${actionsTitle} Update Heroe Detail`, props<{ index: number }>());


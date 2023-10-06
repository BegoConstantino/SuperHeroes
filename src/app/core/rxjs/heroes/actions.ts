import { SuperHero } from '@core/models';
import { createAction, props } from '@ngrx/store';

const actionsTitle = '[Heroes]';

export const setList = createAction(`${actionsTitle} Set Heroes List`, props<{ value: SuperHero[] }>());

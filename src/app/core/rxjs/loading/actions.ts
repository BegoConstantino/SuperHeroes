import { createAction, props } from '@ngrx/store';

const actionsTitle = '[PAGE]';

export const setIsLoading = createAction(`${actionsTitle} Set Is Loading`, props<{ loading: boolean }>());

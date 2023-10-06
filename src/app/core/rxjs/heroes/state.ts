import { SuperHero } from '@core/models';

export interface State {
	list: SuperHero[];
	detail?: SuperHero;
}
export const initialState: State = {
	list: [],
};

import { SuperHero } from '@core/models';

export interface State {
	list: SuperHero[];
}
export const initialState: State = {
	list: [],
};

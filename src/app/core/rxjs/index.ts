import { State as GeneralState } from './reducer';
import * as HeroesActions from './heroes/actions';
import * as HeroesSelectors from './heroes/selectors';
import * as HeroesState from './heroes/state';

import * as LoadingActions from './loading/actions';
import * as LoadingSelectors from './loading/selectors';
import * as LoadingState from './loading/state';

export { GeneralState, HeroesActions, HeroesSelectors, HeroesState, LoadingActions, LoadingSelectors, LoadingState };

import store from './store';
import { VANILLA } from './constants/flavors';
import { actions } from './ducks/freezer';

store.dispatch(actions.updateTemperature(-8));
store.dispatch(actions.addProductToFreezer(VANILLA, 15));

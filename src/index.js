import store from './store';
import { VANILLA } from './constants/flavors';
import { actions } from './ducks/freezer';

store.subscribe(() => console.log(store.getState()));

store.dispatch(actions.updateTemperature(-8));
store.dispatch(actions.addProductToFreezer(VANILLA, 15));

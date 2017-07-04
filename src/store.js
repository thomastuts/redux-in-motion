import { createStore, combineReducers } from 'redux';
import { reducer as freezer } from './ducks/freezer';

const rootReducer = combineReducers({
  freezer,
});

export default createStore(rootReducer);

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as freezer } from './ducks/freezer';
import logger from './middleware/logger';

const rootReducer = combineReducers({
  freezer,
});

export default createStore(rootReducer, applyMiddleware(logger));

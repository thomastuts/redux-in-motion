import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { reducer as freezer } from './ducks/freezer';

const rootReducer = combineReducers({
  freezer,
});

export default createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk)
));

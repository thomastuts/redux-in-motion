import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { reducer as freezer } from './ducks/freezer';
import { reducer as orders } from './ducks/orders';
import { reducer as employees } from './ducks/employees';

const rootReducer = combineReducers({
  freezer,
  orders,
  employees,
});

export default createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk)
));

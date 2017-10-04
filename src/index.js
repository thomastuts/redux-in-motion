import React from 'react';
import ReactDOM from 'react-dom';

import store from './store';
import { VANILLA } from './constants/flavors';
import { actions } from './ducks/freezer';
import App from './components/App/App';

store.dispatch(actions.updateTemperature(-8));
store.dispatch(actions.addProductToFreezer(VANILLA, 15));
store.dispatch(actions.doSomething());

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

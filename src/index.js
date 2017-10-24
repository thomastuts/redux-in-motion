import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/App/App';

import store from './store';
import * as FLAVORS from './constants/flavors';
import { actions } from './ducks/freezer';

setTimeout(function () {
  store.dispatch(actions.addProductToFreezer(FLAVORS.STRAWBERRY, 5));
}, 1500);

ReactDOM.render(
  (
    <Provider store={store}>
      <App/>
    </Provider>
  ),
  document.getElementById('root')
);

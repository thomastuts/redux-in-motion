import { createStore } from 'redux';
import { reducer } from './ducks/freezer';

export default createStore(reducer);

import { createStore } from 'redux';
import freezerReducer from './reducers/freezer';

export default createStore(freezerReducer);

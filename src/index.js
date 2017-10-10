import store from './store';
import { actions } from './ducks/employees';

store.dispatch(actions.fetchEmployees());

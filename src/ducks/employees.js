import axios from 'axios';

export const types = {
  FETCH_EMPLOYEES_REQUEST: 'FETCH_EMPLOYEES_REQUEST',
  FETCH_EMPLOYEES_SUCCESS: 'FETCH_EMPLOYEES_SUCCESS',
  FETCH_EMPLOYEES_FAILURE: 'FETCH_EMPLOYEES_FAILURE',
};

const DEFAULT_STATE = {

};

export function reducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export const actions = {
  fetchEmployees() {
    return function (dispatch, getState) {
      dispatch({
        type: types.FETCH_EMPLOYEES_REQUEST,
      });

      axios.get('/employees.json')
        .then(function (response) {
          dispatch({
            type: types.FETCH_EMPLOYEES_SUCCESS,
            payload: response.data,
          });
        })
        .catch(err => {
          dispatch({
            type: types.FETCH_EMPLOYEES_FAILURE,
            payload: err.message,
          });
        });
    };
  },
};

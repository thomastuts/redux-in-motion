import axios from 'axios';

export const types = {
  FETCH_EMPLOYEES_REQUEST: 'FETCH_EMPLOYEES_REQUEST',
  FETCH_EMPLOYEES_SUCCESS: 'FETCH_EMPLOYEES_SUCCESS',
  FETCH_EMPLOYEES_FAILURE: 'FETCH_EMPLOYEES_FAILURE',
};

const DEFAULT_STATE = {
  loading: false,
  data: [],
  error: null,
};

export function reducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case types.FETCH_EMPLOYEES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.FETCH_EMPLOYEES_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case types.FETCH_EMPLOYEES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
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

      return axios.get('/employees.json')
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

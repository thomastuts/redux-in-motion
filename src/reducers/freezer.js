import { UPDATE_TEMPERATURE } from '../constants/freezer';

const DEFAULT_STATE = {
  temperature: null,
};

export default function freezerReducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case UPDATE_TEMPERATURE:
      return {
        ...state,
        temperature: action.payload,
      };
  }

  return state;
}

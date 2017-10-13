import * as FLAVORS from '../constants/flavors';

export const types = {
  UPDATE_TEMPERATURE: 'UPDATE_TEMPERATURE',
  ADD_PRODUCT_TO_FREEZER: 'ADD_PRODUCT_TO_FREEZER',
  REMOVE_SCOOP: 'REMOVE_SCOOP',
};

const DEFAULT_STATE = {
  temperature: null,
  flavors: {
    [FLAVORS.STRAWBERRY]: 10,
    [FLAVORS.SALTED_CARAMEL]: 20,
  },
};

export function reducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case types.UPDATE_TEMPERATURE:
      return {
        ...state,
        temperature: action.payload,
      };
    case types.ADD_PRODUCT_TO_FREEZER: {
      const amount = (state.flavors[action.payload.name] || 0) + action.payload.amount;
      return {
        ...state,
        flavors: {
          ...state.flavors,
          [action.payload.name]: Math.min(amount, 60),
        },
      };
    }
    case types.REMOVE_SCOOP: {
      const amount = (state.flavors[action.payload] || 0) - 1;
      return {
        ...state,
        flavors: {
          ...state.flavors,
          [action.payload]: Math.max(amount, 0),
        },
      };
    }
    default:
      return state;
  }
}

export const actions = {
  updateTemperature(temperature) {
    return {
      type: types.UPDATE_TEMPERATURE,
      payload: temperature,
    };
  },
  addProductToFreezer(name, amount = 20) {
    return {
      type: types.ADD_PRODUCT_TO_FREEZER,
      payload: {
        name,
        amount,
      }
    };
  },
  removeScoop(flavorName) {
    return {
      type: types.REMOVE_SCOOP,
      payload: flavorName,
    };
  }
};


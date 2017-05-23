const INCREASE_COUNT = 'INCREASE_COUNT';

export const increaseCount = (amount = 1) => ({
  type: INCREASE_COUNT,
  payload: amount,
});

const DEFAULT_STATE = {
  count: 0,
  nightMode: true,
};

export function reducer(state = DEFAULT_STATE, action = {}) {
  switch (action.type) {
    case INCREASE_COUNT:
      return {
        ...state,
        count: state.count + action.payload,
      };
  }

  return state;
}

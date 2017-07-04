export const types = {
  PLACE_ORDER: 'PLACE_ORDER',
};

export function reducer(state = [], action) {
  switch (action.type) {
    case types.PLACE_ORDER:
      return [
        ...state,
        {
          ...action.payload,
          status: 'pending',
        }
      ];
    default:
      return state;
  }
}

export const actions = {
  placeOrder({ customerName, createdAt = Date.now(), cone = true, scoops }) {
    return {
      type: types.PLACE_ORDER,
      payload: { customerName, createdAt, cone, scoops },
    };
  }
};

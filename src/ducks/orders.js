export const types = {
  PLACE_ORDER: 'PLACE_ORDER',
  FULFILL_ORDER: 'FULFILL_ORDER',
  PAY_FOR_ORDER: 'PAY_FOR_ORDER',
  CANCEL_ORDER: 'CANCEL_ORDER',
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
    case types.FULFILL_ORDER:
      return state.map(function (order, index) {
        if (index === action.payload) {
          return {
            ...order,
            status: 'fulfilled',
          };
        }

        return order;
      });
    case types.PAY_FOR_ORDER:
      return state.map(function (order, index) {
        if (index === action.payload) {
          return {
            ...order,
            status: 'paid',
          };
        }

        return order;
      });
    case types.CANCEL_ORDER:
      return state.filter(function (order, index) {
        return index !== action.payload;
      });
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
  },
  fulfillOrder(id) {
    return {
      type: types.FULFILL_ORDER,
      payload: id,
    };
  },
  payForOrder(id) {
    return {
      type: types.PAY_FOR_ORDER,
      payload: id,
    };
  },
  cancelOrder(id) {
    return {
      type: types.CANCEL_ORDER,
      payload: id,
    };
  },
};

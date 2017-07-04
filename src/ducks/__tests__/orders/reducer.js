import { reducer, actions } from '../../orders';
import { VANILLA } from '../../../constants/flavors';

describe('Orders reducer', function () {
  it('should store the order in the state', function () {
    const newState = reducer(undefined, actions.placeOrder({
      customerName: 'Cindy',
      cone: false,
      scoops: {
        [VANILLA]: 1,
      }
    }));

    expect(newState.length).toEqual(1);
    expect(newState[0].customerName).toEqual('Cindy');
    expect(newState[0].cone).toEqual(false);
    expect(newState[0].scoops).toEqual({
      [VANILLA]: 1,
    });
    expect(typeof newState[0].createdAt).toEqual('number');
    expect(newState[0].status).toEqual('pending');
  });

  it('should mark a given order as fulfilled in the store', function () {
    const existingState = [
      {
        customerName: 'Cindy',
        status: 'pending',
      }
    ];

    const newState = reducer(existingState, actions.fulfillOrder(0));

    expect(newState[0].status).toEqual('fulfilled');
  });

  it('should mark a given order as paid in the store', function () {
    const existingState = [
      {
        customerName: 'Cindy',
        status: 'pending',
      }
    ];

    const newState = reducer(existingState, actions.payForOrder(0));

    expect(newState[0].status).toEqual('paid');
  });

  it('should remove an order from the store', function () {
    const existingState = [
      {
        customerName: 'Cindy',
        status: 'pending',
      }
    ];

    const newState = reducer(existingState, actions.cancelOrder(0));

    expect(newState).toEqual([]);
  });
});

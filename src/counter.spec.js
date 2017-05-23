import {increaseCount, reducer} from './counter';

describe('Counter', function () {
  it('should return the default state when no action is given', function () {
    const result = reducer();
    expect(result).toEqual(expect.objectContaining({
      count: 0,
    }));
  });

  it('should increase the count when the right action is passed in the reducer', function () {
    const action = increaseCount();
    const result = reducer(undefined, action);
    expect(result.count).toEqual(1);
  });

  it('should increase the count with the right amount passed into the reducer', function () {
    const action = increaseCount(3);
    const result = reducer(undefined, action);
    expect(result.count).toEqual(3);
  });
});

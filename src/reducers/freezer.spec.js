import reducer from './freezer';
import { updateTemperature } from '../actions/freezer';

describe('Freezer reducer', function () {
  it('should store the temperature in the state', function () {
    const newState = reducer(undefined, updateTemperature(-5));
    expect(newState.temperature).toEqual(-5);
  });
});

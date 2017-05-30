import { UPDATE_TEMPERATURE } from '../constants/freezer';

export function updateTemperature(temperature) {
  return {
    type: UPDATE_TEMPERATURE,
    payload: temperature,
  };
}

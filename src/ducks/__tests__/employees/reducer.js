import { types, reducer } from '../../employees';

describe('Fetching employees', function () {
  describe('Request start', function () {
    it('should set the loading property to `true` when the fetching starts', function () {
      const result = reducer(undefined, {
        type: types.FETCH_EMPLOYEES_REQUEST,
      });
      expect(result.loading).toEqual(true);
    });
  });

  describe('Successful fetch', function () {
    it('should set the loading property to `false`', function () {
      const result = reducer({ loading: true }, {
        type: types.FETCH_EMPLOYEES_SUCCESS,
      });
      expect(result.loading).toEqual(false);
    });

    it('should store the employee data', function () {
      const fakeData = [1, 2, 3];
      const result = reducer(undefined, {
        type: types.FETCH_EMPLOYEES_SUCCESS,
        payload: fakeData,
      });
      expect(result.data).toEqual(fakeData);
    });
  });

  describe('Failed fetch', function () {
    it('should set the loading property to `false`', function () {
      const result = reducer({ loading: true }, {
        type: types.FETCH_EMPLOYEES_FAILURE,
      });
      expect(result.loading).toEqual(false);
    });

    it('should store the error', function () {
      const fakeError = '404 Not Found';
      const result = reducer(undefined, {
        type: types.FETCH_EMPLOYEES_FAILURE,
        payload: fakeError,
      });
      expect(result.error).toEqual(fakeError);
    });
  });
});

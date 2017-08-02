it('should check for equal values', function () {
  expect(5).toEqual(5);
});

it('should check for equal values using deep equality', function () {
  expect({ foo: 5 }).toEqual({ foo: 5 });
  expect([1, 2, 3]).toEqual([1, 2, 3]);
});

it('should check that an array contains a specific value', function () {
  expect([1, 2, 3]).toContain(2);
});

it('should check that an array contains a specific object/array', function () {
  expect([{ foo: 5 }, { foo: 6 }]).toContainEqual({ foo: 6 });
});

it('should support spies', function () {
  const spy = jest.fn();
  spy('foo');
  expect(spy).toHaveBeenCalledWith('foo');
});

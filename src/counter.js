const increaseCount = (amount = 1) => ({
  type: 'INCREASE_COUNT',
  payload: amount,
});

console.log(increaseCount());

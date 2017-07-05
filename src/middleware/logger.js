export default store => next => action => {
  const result = next(action);
  console.log('Action:', action);
  console.log('State:', store.getState());
  return result;
}

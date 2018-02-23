export default store => next => action => {
  console.log('Action:', action);
  next(action);
  console.log('State:', store.getState());
}

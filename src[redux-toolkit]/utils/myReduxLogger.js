const reduxLoggerMiddleware = () => {
  return ({ getState, dispatch }) =>
    (next) =>
    (action) => {
      console.log('==prev state:', getState());
      try {
        next(action);
        console.log('==next state:', getState());
      } catch (e) {
        console.log(e);
        throw e;
      }
    };
};

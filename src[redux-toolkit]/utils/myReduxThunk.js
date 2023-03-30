const reduxThunkMiddleware = (extraArguments) => {
  return ({ getState, dispatch }) =>
    (next) =>
    (action) => {
      if (typeof action === 'function') {
        return action(dispatch, getState, extraArguments);
      }
      return next(action);
    };
};

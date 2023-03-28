interface ActionType {
  type: any;
  [k: string]: any;
}
export const createStore = (
  reducer: (state: any, action: ActionType) => object
) => {
  let state: object = reducer(undefined, { type: undefined });
  const listeners: Array<() => void> = [];
  const getState = () => {
    return state;
  };
  const subscribe = (fn: () => void) => {
    if (!listeners.includes(fn)) {
      listeners.push(fn);
    }
    // 返回 unsubscribe 函数，移除这次 push 的 fn
    return () => {
      const index = listeners.indexOf(fn);
      listeners.splice(index, 1);
    };
  };
  const dispatch = (action: ActionType) => {
    listeners.forEach((fn) => fn());
    state = reducer(state, action);
    return action;
  };
  return {
    getState,
    subscribe,
    dispatch,
  };
};

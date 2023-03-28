interface StateType {
  [k: string]: any;
}
interface ActionType {
  type: any;
  [k: string]: any;
}
type ReducerFnType<T extends StateType> = (state: T, action: ActionType) => T;
const MyCombineReducer = (reducers: {
  [k: string | symbol]: ReducerFnType<StateType>;
}) => {
  const reducerKeys = Reflect.ownKeys(reducers);
  // 返回一个总的reducer函数，该函数会依次调用传入的reducers
  return (state: { [k: string | symbol]: StateType }, action: ActionType) => {
    const nextState: { [k: string | symbol]: StateType } = {};
    // state: 是组合的state
    reducerKeys.forEach((key) => {
      const reducer = reducers[key];
      // 传入对应的state，执行单个reducer
      nextState[key] = reducer(state[key], action);
    });
    // 返回所有的state
    return nextState;
  };
};
export default MyCombineReducer;

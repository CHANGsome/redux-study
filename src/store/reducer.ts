import { ActionProps, ACTION_TYPE, VoteStateType } from './type';

let initialState: VoteStateType = {
  supportNum: 10,
  oppositeNum: 5,
};

const reducer = (state = initialState, action: ActionProps) => {
  state = { ...state };
  switch (action.type) {
    case ACTION_TYPE.SUPPORT:
      state.supportNum++;
      break;
    case ACTION_TYPE.OPPOSITE:
      state.oppositeNum++;
      break;
    default:
      break;
  }
  return state;
};
export default reducer;

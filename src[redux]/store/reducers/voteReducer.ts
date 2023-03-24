import { VoteActionProps, ACTION_TYPE, VoteStateType } from '../type';

let initialState: VoteStateType = {
  supportNum: 10,
  oppositeNum: 5,
};

const voteReducer = (state = initialState, action: VoteActionProps) => {
  state = { ...state };
  switch (action.type) {
    case ACTION_TYPE.VOTE_SUPPORT:
      state.supportNum++;
      break;
    case ACTION_TYPE.VOTE_OPPOSITE:
      state.oppositeNum++;
      break;
    default:
      break;
  }
  return state;
};
export default voteReducer;

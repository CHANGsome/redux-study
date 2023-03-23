import { VoteActionProps, VOTE_ACTION_TYPE, VoteStateType } from '../type';

let initialState: VoteStateType = {
  supportNum: 10,
  oppositeNum: 5,
};

const voteReducer = (state = initialState, action: VoteActionProps) => {
  state = { ...state };
  switch (action.type) {
    case VOTE_ACTION_TYPE.SUPPORT:
      state.supportNum++;
      break;
    case VOTE_ACTION_TYPE.OPPOSITE:
      state.oppositeNum++;
      break;
    default:
      break;
  }
  return state;
};
export default voteReducer;

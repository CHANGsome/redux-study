import { ACTION_TYPE } from '../type';

const VoteActions = {
  support: () => {
    return { type: ACTION_TYPE.VOTE_SUPPORT };
  },
  oppose: () => {
    return { type: ACTION_TYPE.VOTE_OPPOSITE };
  },
};
export default VoteActions;

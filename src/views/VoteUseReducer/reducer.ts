import { VoteStateType } from '../../store/type';

export const initialState = {
  supportNum: 10,
  oppositeNum: 5,
};
const reducer = (state: VoteStateType, action: { type: string }) => {
  state = { ...state };
  switch (action.type) {
    case 'support':
      state.supportNum++;
      console.log(state, '===');

      break;
    case 'oppose':
      state.oppositeNum++;
      break;
  }
  return state;
};
export default reducer;

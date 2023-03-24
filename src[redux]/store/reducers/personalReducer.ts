import { PersonalActionProps, PersonalStateType, ACTION_TYPE } from '../type';

let initialState: PersonalStateType = {
  title: '',
  content: '',
};

const personalReducer = (state = initialState, action: PersonalActionProps) => {
  state = { ...state };
  switch (action.type) {
    case ACTION_TYPE.PERSONAL_ACTION:
      state = action.payload;
      break;
    default:
      break;
  }
  return state;
};
export default personalReducer;

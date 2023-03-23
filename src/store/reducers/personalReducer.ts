import {
  PersonalActionProps,
  PersonalStateType,
  PERSONAL_ACTION_TYPE,
} from '../type';

let initialState: PersonalStateType = {
  title: '',
  content: '',
};

const personalReducer = (state = initialState, action: PersonalActionProps) => {
  state = { ...state };
  switch (action.type) {
    case PERSONAL_ACTION_TYPE.CHANGE:
      state = action.payload;
      break;
    default:
      break;
  }
  return state;
};
export default personalReducer;

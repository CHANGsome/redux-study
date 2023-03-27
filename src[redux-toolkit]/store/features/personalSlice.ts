import { createSlice } from '@reduxjs/toolkit';
import { PersonalStateType } from '../type';

const personalSlice = createSlice({
  name: 'personal',
  initialState: { title: '', content: '' },
  reducers: {
    getInfo: (state, action) => {
      state.title = action.payload.title;
      state.content = action.payload.content;
    },
  },
});
export let { getInfo } = personalSlice.actions;

export const getInfoSync = () => {
  return async (dispatch: (data: { payload: any; type: string }) => void) => {
    const data = await new Promise<PersonalStateType>((resolve) => {
      setTimeout(() => {
        resolve({ title: 'personal title', content: 'personal content' });
      }, 1000);
    });
    dispatch(getInfo(data));
  };
};
export default personalSlice.reducer;

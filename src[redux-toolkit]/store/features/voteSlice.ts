import { createSlice } from '@reduxjs/toolkit';

const voteSlice = createSlice({
  name: 'vote',
  initialState: { supportNum: 10, oppositeNum: 5 },
  reducers: {
    support: (state) => {
      state.supportNum++;
    },
    oppose: (state) => {
      state.oppositeNum++;
    },
  },
});
export let { support, oppose } = voteSlice.actions;
export default voteSlice.reducer;

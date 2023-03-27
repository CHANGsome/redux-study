import reduxLogger from 'redux-logger';
import reduxThunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';
import voteSliceReducer from './features/voteSlice';
import personalSliceReducer from './features/personalSlice';

const store = configureStore({
  reducer: { vote: voteSliceReducer, personal: personalSliceReducer },
  middleware: [reduxLogger, reduxThunk],
});

export default store;

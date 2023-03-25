// import { createStore } from '../utils/MyRedux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import personalReducer from './reducers/personalReducer';
import voteReducer from './reducers/voteReducer';
import reduxLogger from 'redux-logger';
const store = createStore(
  combineReducers({ vote: voteReducer, personal: personalReducer }),
  applyMiddleware(reduxLogger)
);

export default store;

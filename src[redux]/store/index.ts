// import { createStore } from '../utils/MyRedux';
import { combineReducers, createStore } from 'redux';
import personalReducer from './reducers/personalReducer';
import voteReducer from './reducers/voteReducer';

const store = createStore(
  combineReducers({ vote: voteReducer, personal: personalReducer })
);

export default store;

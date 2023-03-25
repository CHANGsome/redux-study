import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import Vote from './views/Vote/index';
/* 使用ANTD组件库 */
import './index.less';
import store from './store';
import Personal from './views/Personal';
import Demo from './views/Demo';
import { Provider } from 'react-redux';
import {
  PersonalStateType,
  VoteActionProps,
  VoteStateType,
} from './store/type';
/* REDUX */
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
    <Provider<
      VoteActionProps,
      {
        vote: VoteStateType;
        personal: PersonalStateType;
      }
    >
      store={store}
    >
      <Vote />
      <br />
      <Personal />
    </Provider>
    <Demo />
  </>
);

import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import Vote from './views/Vote';
/* 使用ANTD组件库 */
import './index.less';
import VoteContext from './store/context';
import store from './store';
/* REDUX */
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <VoteContext.Provider value={store}>
    <Vote />
  </VoteContext.Provider>
);

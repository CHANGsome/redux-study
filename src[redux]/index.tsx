import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import Vote from './views/Vote/index';
/* 使用ANTD组件库 */
import './index.less';
import GlobalContext from './store/context';
import store from './store';
import Personal from './views/Personal';
import Demo from './views/Demo';
/* REDUX */
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
    <GlobalContext.Provider value={store}>
      <Vote />
      <br />
      <Personal />
    </GlobalContext.Provider>
    <Demo />
  </>
);

import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import Vote from './views/Vote/index';
/* 使用ANTD组件库 */
import './index.less';
import store from './store';
import Personal from './views/Personal';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
    <Provider store={store}>
      <Vote />
      <br />
      <Personal />
    </Provider>
  </>
);

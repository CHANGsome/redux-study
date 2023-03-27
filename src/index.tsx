import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import Vote from './views/Vote/index';
/* 使用ANTD组件库 */
import './index.less';
import Personal from './views/Personal/index';
// import './decorator';
// import './proxy';
// import Demo from './views/MobxDemo';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
    <Vote />
    <Personal />
  </>
);

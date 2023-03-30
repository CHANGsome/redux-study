import { Provider } from 'mobx-react';
import * as React from 'react';
import { HashRouter, Link, Redirect, Route, Switch } from 'react-router-dom';
import C from './components/C';
import store from './store';
import Personal from './views/Personal';
import Vote from './views/Vote';
import VoteUseReducer from './views/VoteUseReducer';

// hash 路由方案
const App: React.FC = () => {
  // 全部渲染内容用HashRouter包起来，开启hash模式
  return (
    <HashRouter>
      {/* 页面导航 */}
      <div>
        <Link to='/vote' style={{ margin: 10 }}>
          Vote
        </Link>
        <Link to='/personal' style={{ margin: 10 }}>
          Personal
        </Link>
        <Link to='/c' style={{ margin: 10 }}>
          C
        </Link>
      </div>
      {/* 路由匹配: 用switch包起来，只要匹配到就不往后再匹配 */}
      <Provider {...store}>
        <Switch>
          {/* exact: 精准匹配（则 '/a' 不会和 '/' 匹配上） */}
          <Route exact path='/' component={Vote} />
          <Route path='/vote' component={Vote} />
          <Route path='/personal' component={Personal} />
          <Route
            path='/c'
            render={() => {
              // 也可以使用render函数渲染
              const isLogin = true;
              if (isLogin) {
                return <VoteUseReducer />;
              }
              return <Redirect to='/' />;
            }}
          />
          {/* 不是规则中的地址，默认重定向： */}
          <Redirect to='/' />
        </Switch>
      </Provider>
    </HashRouter>
  );
};
export default App;

import * as React from 'react';
import { HashRouter, Link, Redirect, Route, Switch } from 'react-router-dom';
import A from './components/A';
import B from './components/B';
import C from './components/C';

// hash 路由方案
const App: React.FC = () => {
  // 全部渲染内容用HashRouter包起来，开启hash模式
  return (
    <HashRouter>
      {/* 页面导航 */}
      <div>
        <Link to='/a' style={{ margin: 10 }}>
          A
        </Link>
        <Link to='/b' style={{ margin: 10 }}>
          B
        </Link>
        <Link to='/c' style={{ margin: 10 }}>
          C
        </Link>
      </div>
      {/* 路由匹配: 用switch包起来，只要匹配到就不往后再匹配 */}
      <Switch>
        {/* exact: 精准匹配（则 '/a' 不会和 '/' 匹配上） */}
        <Route exact path='/' component={A} />
        <Route path='/a' component={A} />
        <Route path='/b' component={B} />
        <Route
          path='/c'
          render={() => {
            // 也可以使用render函数渲染
            const isLogin = true;
            if (isLogin) {
              return <C />;
            }
            return <Redirect to='/' />;
          }}
        />
        {/* 不是规则中的地址，默认重定向： */}
        <Redirect to='/' />
      </Switch>
    </HashRouter>
  );
};
export default App;

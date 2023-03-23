import * as React from 'react';
import './index.less';
import VoteMain from './VoteMain';
import VoteFooter from './VoteFooter';
import GlobalContext from '../../store/context';

const Vote = () => {
  const store = React.useContext(GlobalContext);
  const { supportNum, oppositeNum } = store!.getState().vote;
  // 没有什么用，只是用来更新组件
  const [_, setX] = React.useState(new Date());
  React.useEffect(() => {
    store!.subscribe(() => {
      setX(new Date());
    });
  }, []);
  return (
    <div className='vote-box'>
      <div className='header'>
        <h2 className='title'>学习Redux真好玩</h2>
        <span className='num'>{supportNum + oppositeNum}</span>
      </div>
      <VoteMain />
      <VoteFooter />
    </div>
  );
};

export default Vote;

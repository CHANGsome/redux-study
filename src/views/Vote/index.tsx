import * as React from 'react';
import './index.less';
import VoteMain from './VoteMain';
import VoteFooter from './VoteFooter';
import { observer } from 'mobx-react';
import voteStore from '../../store/voteStore';
import personalStore from '../../store/personalStore';

const Vote = observer(() => {
  const { supportNum, oppositeNum } = voteStore;

  return (
    <div className='vote-box'>
      <div className='header'>
        <h2 className='title'>学习Redux真好玩{personalStore.info.title}</h2>
        <span className='num'>{supportNum + oppositeNum}</span>
      </div>
      <VoteMain />
      <VoteFooter />
    </div>
  );
});

export default Vote;

import * as React from 'react';
import './index.less';
import VoteMain from './VoteMain';
import VoteFooter from './VoteFooter';
import { useSelector } from 'react-redux';
import { VoteStateType } from '../../store/type';

const Vote = () => {
  const { supportNum, oppositeNum } = useSelector(
    (state: { vote: VoteStateType }) => state.vote
  );
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

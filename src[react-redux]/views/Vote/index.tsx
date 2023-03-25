import * as React from 'react';
import './index.less';
import VoteMain from './VoteMain';
import VoteFooter from './VoteFooter';
import { connect } from 'react-redux';
import { PersonalStateType, VoteStateType } from '../../store/type';

const Vote = (props: VoteStateType) => {
  const { supportNum, oppositeNum } = props;
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

export default connect(
  (state: { vote: VoteStateType; personal: PersonalStateType }) => {
    return state.vote;
  }
)(Vote);

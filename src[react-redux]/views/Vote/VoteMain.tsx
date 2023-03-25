import * as React from 'react';
import { connect } from 'react-redux';
import { PersonalStateType, VoteStateType } from '../../store/type';
const VoteMain = (props: VoteStateType) => {
  const { supportNum, oppositeNum } = props;

  return (
    <div className='main'>
      <p>支持人数：{supportNum}人</p>
      <p>反对人数：{oppositeNum}人</p>
    </div>
  );
};
export default connect(
  (state: { vote: VoteStateType; personal: PersonalStateType }) => state.vote
)(VoteMain);

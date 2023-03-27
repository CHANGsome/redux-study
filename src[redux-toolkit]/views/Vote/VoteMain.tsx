import * as React from 'react';
import { useSelector } from 'react-redux';
import { VoteStateType } from '../../store/type';
const VoteMain = () => {
  const { supportNum, oppositeNum } = useSelector(
    (state: { vote: VoteStateType }) => state.vote
  );

  return (
    <div className='main'>
      <p>支持人数：{supportNum}人</p>
      <p>反对人数：{oppositeNum}人</p>
    </div>
  );
};
export default VoteMain;

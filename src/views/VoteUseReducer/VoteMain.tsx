import * as React from 'react';
import reducer, { initialState } from './reducer';
const VoteMain = () => {
  const [state] = React.useReducer(reducer, initialState);

  return (
    <div className='main'>
      <p>支持人数：{state.supportNum}人</p>
      <p>反对人数：{state.oppositeNum}人</p>
    </div>
  );
};
export default VoteMain;

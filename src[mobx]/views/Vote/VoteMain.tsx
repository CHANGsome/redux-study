import { MobXProviderContext } from 'mobx-react';
import * as React from 'react';
import { VoteStore } from '../../store/voteStore';
const VoteMain = () => {
  const { voteStore } = React.useContext(MobXProviderContext) as {
    voteStore: VoteStore;
  };
  const { supportNum, oppositeNum } = voteStore;

  return (
    <div className='main'>
      <p>支持人数：{supportNum}人</p>
      <p>反对人数：{oppositeNum}人</p>
    </div>
  );
};
export default VoteMain;

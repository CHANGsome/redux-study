import * as React from 'react';
import VoteContext from '../store/context';
import { VoteStoreType } from '../store/type';

const VoteMain = () => {
  const store = React.useContext(VoteContext) as VoteStoreType;
  const { supportNum, oppositeNum } = store.getState();
  // 没有什么用，只是用来更新组件
  const [_, setX] = React.useState(new Date());
  React.useEffect(() => {
    store.subscribe(() => {
      setX(new Date());
    });
  }, []);
  return (
    <div className='main'>
      <p>支持人数：{supportNum}人</p>
      <p>反对人数：{oppositeNum}人</p>
    </div>
  );
};
export default VoteMain;

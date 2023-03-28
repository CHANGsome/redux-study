import * as React from 'react';
import { Button } from 'antd';
import { MobXProviderContext } from 'mobx-react';
import { VoteStore } from '../../store/voteStore';

const VoteFooter = () => {
  const { voteStore } = React.useContext(MobXProviderContext) as {
    voteStore: VoteStore;
  };
  const { support, oppose } = voteStore;
  return (
    <div className='footer'>
      <Button
        type='primary'
        onClick={() => {
          support();
        }}
      >
        支持
      </Button>
      <Button
        type='primary'
        danger
        onClick={() => {
          oppose();
        }}
      >
        反对
      </Button>
    </div>
  );
};
export default VoteFooter;

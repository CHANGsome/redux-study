import * as React from 'react';
import { Button } from 'antd';
import voteStore from '../../store/voteStore';

const VoteFooter = () => {
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

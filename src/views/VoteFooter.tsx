import * as React from 'react';
import { Button } from 'antd';
import VoteContext from '../store/context';
import { ACTION_TYPE, VoteStoreType } from '../store/type';

const VoteFooter = () => {
  const store = React.useContext(VoteContext) as VoteStoreType;
  return (
    <div className='footer'>
      <Button
        type='primary'
        onClick={() => store.dispatch({ type: ACTION_TYPE.SUPPORT })}
      >
        支持
      </Button>
      <Button
        type='primary'
        danger
        onClick={() => store.dispatch({ type: ACTION_TYPE.OPPOSITE })}
      >
        反对
      </Button>
    </div>
  );
};
export default VoteFooter;

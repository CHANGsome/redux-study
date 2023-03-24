import * as React from 'react';
import { Button } from 'antd';
import GlobalContext from '../../store/context';
import { ACTION_TYPE } from '../../store/type';

const VoteFooter = () => {
  const store = React.useContext(GlobalContext);
  return (
    <div className='footer'>
      <Button
        type='primary'
        onClick={() => store!.dispatch({ type: ACTION_TYPE.VOTE_SUPPORT })}
      >
        支持
      </Button>
      <Button
        type='primary'
        danger
        onClick={() => store!.dispatch({ type: ACTION_TYPE.VOTE_OPPOSITE })}
      >
        反对
      </Button>
    </div>
  );
};
export default VoteFooter;

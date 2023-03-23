import * as React from 'react';
import { Button } from 'antd';
import GlobalContext from '../../store/context';
import { VOTE_ACTION_TYPE } from '../../store/type';

const VoteFooter = () => {
  const store = React.useContext(GlobalContext);
  return (
    <div className='footer'>
      <Button
        type='primary'
        onClick={() => store!.dispatch({ type: VOTE_ACTION_TYPE.SUPPORT })}
      >
        支持
      </Button>
      <Button
        type='primary'
        danger
        onClick={() => store!.dispatch({ type: VOTE_ACTION_TYPE.OPPOSITE })}
      >
        反对
      </Button>
    </div>
  );
};
export default VoteFooter;

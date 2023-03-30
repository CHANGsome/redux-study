import * as React from 'react';
import { Button } from 'antd';
import reducer, { initialState } from './reducer';

const VoteFooter = () => {
  const [_state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <div className='footer'>
      <Button
        type='primary'
        onClick={() => {
          dispatch({ type: 'support' });
        }}
      >
        支持
      </Button>
      <Button
        type='primary'
        danger
        onClick={() => {
          dispatch({ type: 'oppose' });
        }}
      >
        反对
      </Button>
    </div>
  );
};
export default VoteFooter;

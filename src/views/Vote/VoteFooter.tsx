import * as React from 'react';
import { Button } from 'antd';
import { useDispatch } from 'react-redux';
import { oppose, support } from '../../store/features/voteSlice';

const VoteFooter = () => {
  const dispatch = useDispatch();
  return (
    <div className='footer'>
      <Button
        type='primary'
        onClick={() => {
          dispatch(support());
        }}
      >
        支持
      </Button>
      <Button
        type='primary'
        danger
        onClick={() => {
          dispatch(oppose());
        }}
      >
        反对
      </Button>
    </div>
  );
};
export default VoteFooter;

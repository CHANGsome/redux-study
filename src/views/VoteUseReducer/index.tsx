import * as React from 'react';
import './index.less';
import reducer, { initialState } from './reducer';
import { Button } from 'antd';

const Vote = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <div className='vote-box'>
      <div className='header'>
        <h2 className='title'>学习Redux真好玩</h2>
        <span className='num'>{state.supportNum + state.oppositeNum}</span>
      </div>
      <div className='main'>
        <p>支持人数：{state.supportNum}人</p>
        <p>反对人数：{state.oppositeNum}人</p>
      </div>
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
    </div>
  );
};

export default Vote;

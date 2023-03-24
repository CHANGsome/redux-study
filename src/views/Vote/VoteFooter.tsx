import * as React from 'react';
import { Button } from 'antd';
import { connect } from 'react-redux';
import actions from '../../store/actions';

const VoteFooter = (props: { support: () => void; oppose: () => void }) => {
  return (
    <div className='footer'>
      <Button type='primary' onClick={props.support}>
        支持
      </Button>
      <Button type='primary' danger onClick={props.oppose}>
        反对
      </Button>
    </div>
  );
};
export default connect(null, actions.vote)(VoteFooter);

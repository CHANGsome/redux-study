import * as React from 'react';
import { connect } from 'react-redux';
import actions from '../../store/actions';
import {
  ACTION_TYPE,
  PersonalStateType,
  VoteStateType,
} from '../../store/type';
import Content from './content';
import './index.less';

const Personal = (props: { title: string; change: (payload: any) => void }) => {
  const { title, change } = props;

  React.useEffect(() => {
    change({
      type: ACTION_TYPE.PERSONAL_ACTION,
      payload: { title: '个人信息', content: '内容' },
    });
  }, []);

  return (
    <div className='box'>
      <div className='header'>
        <h2 className='title'>{title}</h2>
      </div>
      <Content />
    </div>
  );
};
export default connect(
  (state: { vote: VoteStateType; personal: PersonalStateType }) => {
    return state.personal;
  },
  (dispatch) => {
    return {
      change: (payload: any) => {
        dispatch(payload);
      },
    };
  }
)(Personal);

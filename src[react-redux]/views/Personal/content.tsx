import * as React from 'react';
import { connect } from 'react-redux';
import { PersonalStateType, VoteStateType } from '../../store/type';

const Content = (props: { content: string }) => {
  const { content } = props;
  return <div>{content}</div>;
};
export default connect(
  (state: { vote: VoteStateType; personal: PersonalStateType }) => {
    return state.personal;
  }
)(Content);

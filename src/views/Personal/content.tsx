import * as React from 'react';
import { useSelector } from 'react-redux';
import { PersonalStateType } from '../../store/type';

const Content = () => {
  const { content } = useSelector(
    (state: { personal: PersonalStateType }) => state.personal
  );
  return <div>{content}</div>;
};
export default Content;

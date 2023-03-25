import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getInfo } from '../../store/features/personalSlice';
import { PersonalStateType } from '../../store/type';
import Content from './content';
import './index.less';

const Personal = () => {
  const { title } = useSelector(
    (state: { personal: PersonalStateType }) => state.personal
  );
  const dispatch = useDispatch();

  React.useEffect(() => {
    (async () => {
      const data = await new Promise<PersonalStateType>((resolve) => {
        setTimeout(() => {
          resolve({ title: 'personal title', content: 'personal content' });
        }, 1000);
      });
      dispatch(getInfo(data));
    })();
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
export default Personal;

import * as React from 'react';
import GlobalContext from '../../store/context';
import { ACTION_TYPE } from '../../store/type';
import Content from './content';
import './index.less';

const Personal = () => {
  const store = React.useContext(GlobalContext);
  const { title } = store!.getState().personal;

  // 没有什么用，只是用来更新组件
  const [_, update] = React.useState(new Date());
  React.useEffect(() => {
    store!.subscribe(() => {
      update(new Date());
    });
    store?.dispatch({
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
export default Personal;

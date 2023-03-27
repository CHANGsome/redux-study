import { observer } from 'mobx-react';
import * as React from 'react';
import personalStore from '../../store/personalStore';
import Content from './content';
import './index.less';

const Personal = observer(() => {
  const { info, updateInfo } = personalStore;
  React.useEffect(() => {
    updateInfo();
  }, []);
  return (
    <div className='box'>
      <div className='header'>
        <h2 className='title'>Title:{info.title}</h2>
      </div>
      <Content />
    </div>
  );
});
export default Personal;

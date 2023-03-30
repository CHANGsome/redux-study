import { observer } from 'mobx-react';
import * as React from 'react';
import personalStore from '../../store/personalStore';
import voteStore from '../../store/voteStore';
import Content from './content';
import './index.less';

const Personal = () => {
  const { info, updateInfo } = personalStore;
  const { changeModalVisible } = voteStore;
  React.useEffect(() => {
    updateInfo();
    changeModalVisible(false);
  }, []);
  return (
    <div className='box'>
      <div className='header'>
        <h2 className='title'>Title:{info.title}</h2>
      </div>
      <Content />
    </div>
  );
};
export default observer(Personal);

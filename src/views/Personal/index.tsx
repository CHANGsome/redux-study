import { inject, observer } from 'mobx-react';
import * as React from 'react';
import { PersonalStore } from '../../store/personalStore';
import Content from './content';
import './index.less';

const Personal = (props: Partial<{ personalStore: PersonalStore }>) => {
  const { info, updateInfo } = props.personalStore as PersonalStore;
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
};
export default inject('personalStore')(observer(Personal));

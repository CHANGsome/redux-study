import { observer } from 'mobx-react';
import * as React from 'react';
import personalStore from '../../store/personalStore';

const Content = observer(() => {
  const { info } = personalStore;
  return <div>content:{info.content}</div>;
});
export default Content;

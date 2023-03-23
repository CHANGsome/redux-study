import * as React from 'react';
import GlobalContext from '../../store/context';

const Content = () => {
  const store = React.useContext(GlobalContext);
  const { content } = store!.getState().personal;
  // 没有什么用，只是用来更新组件
  const [_, update] = React.useState(new Date());
  React.useEffect(() => {
    store!.subscribe(() => {
      update(new Date());
    });
  }, []);

  return <div>{content}</div>;
};
export default Content;

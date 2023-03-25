import DemoContext from './demoContext';
import { useState } from 'react';
import * as React from 'react';
import { Button } from 'antd';
import demoContext from './demoContext';

const Child = () => {
  const value = React.useContext(demoContext);
  return <div>Child:{value}</div>;
};
const Parent = (props: { num: number; changeNum: (num: number) => void }) => {
  return (
    <>
      <Button onClick={() => props.changeNum(props.num + 1)}>add</Button>
      <Child />
    </>
  );
};
const Demo = () => {
  const [num, setNum] = useState(0);
  return (
    <DemoContext.Provider value={num}>
      <div>Demo</div>
      <Parent changeNum={setNum} num={num} />
    </DemoContext.Provider>
  );
};
export default Demo;

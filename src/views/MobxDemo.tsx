import * as React from 'react';
import { observable, action, makeObservable } from 'mobx';
import { observer } from 'mobx-react';

class DemoStore {
  constructor() {
    // mobx 要使用makeObservable才能更新视图
    makeObservable(this);
  }
  @observable num = 10;

  @action addNum() {
    this.num++;
  }
}
const store = new DemoStore();

// @observer
// class Demo extends React.Component {
//   render() {
//     return (
//       <div>
//         <div>{store.num}</div>
//         <button
//           onClick={() => {
//             store.addNum();
//           }}
//         >
//           add
//         </button>
//       </div>
//     );
//   }
// }

const Demo = observer(() => {
  return (
    <div>
      <div>{store.num}</div>
      <button
        onClick={() => {
          store.addNum();
        }}
      >
        add
      </button>
    </div>
  );
});

export default Demo;

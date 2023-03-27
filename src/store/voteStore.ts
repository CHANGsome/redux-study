import { action, makeObservable, observable } from 'mobx';

export class VoteStore {
  constructor() {
    // mobx6.0后的版本都需要手动调用makeObservable(this)，不然会发现数据变了视图不更新
    makeObservable(this);
  }
  @observable supportNum = 10;
  @observable oppositeNum = 5;

  @action
  support = () => {
    this.supportNum++;
  };
  @action oppose = () => {
    this.oppositeNum++;
  };
}
console.log('====vote store');

const voteStore = new VoteStore();
export default voteStore;

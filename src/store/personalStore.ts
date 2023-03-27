import { action, makeObservable, observable, runInAction } from 'mobx';
import { PersonalStateType } from './type';

export class PersonalStore {
  constructor() {
    // mobx6.0后的版本都需要手动调用makeObservable(this)，不然会发现数据变了视图不更新
    makeObservable(this);
  }
  @observable info = {
    title: '',
    content: '',
  };
  @action
  updateInfo = async () => {
    const data = await new Promise<PersonalStateType>((resolve) => {
      setTimeout(() => {
        resolve({ title: 'personal title', content: 'personal content' });
      }, 1000);
    });
    this.info = { ...data };
  };
}
const personalStore = new PersonalStore();
export default personalStore;

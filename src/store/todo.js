import { observable, action } from 'mobx-for-taro';


export default class Todo {
    @observable num;
    constructor(num) {
        this.num = num || 0;
    }
    @action.bound
    handleAdd() {
        this.num = this.num + 1;
    }
    @action.bound
    handleMinus() {
      this.num = this.num - 1;
    }
}

import { extendObservable } from 'mobx';

class ListData {
  constructor(){
    extendObservable(this, {tasks: [
      'Aprender React', 'Hacer una App con React']});
  }

  addTask(task){
    this.tasks.push(task);
  }
  removeTask(index){
    this.tasks.splice(index,1);
  }
}

 var varListData = new ListData;

export default varListData;

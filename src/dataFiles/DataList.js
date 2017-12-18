import { extendObservable } from 'mobx';

class ListData {
  constructor(){
    extendObservable(this, {tasks: [
      'Aprender React', 'Hacer una App con React'
    ]});
  }
}

 var ListData = new ListData;

import React, {Component} from 'react';
import varListData from '../dataFiles/DataList';
import {observer} from 'mobx-react';

class List extends Component {
  constructor() {
    super();
    this.submitTask = this.submitTask.bind(this);
  }

  submitTask(event) {
    if (event.which === 13) {
      varListData.addTask(event.target.value);
      event.target.value = '';
    }
  }

  render() {
    let listDiv = [];
    const addDiv = varListData.tasks.forEach((value, index) =>
    (listDiv.push(<li className = "list-group-item" key={index} onClick = {function(){varListData.removeTask(index)}}>{value}</li>)))
    return (<div className="container">
      <h2>Lista</h2>
      <input onKeyPress={this.submitTask}/>
      <div className ="row">
        <div className = "col-xs-12">
          <ul className = "list-group">
            {listDiv}
          </ul>
        </div>
      </div>
    </div>);
  }
}

export default observer(List);

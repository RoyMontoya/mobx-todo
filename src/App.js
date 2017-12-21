import React, { Component } from 'react';
import { observer } from 'mobx-react'
import './App.css';
import List from './components/List'

class App extends Component {
  render() {
    return (
      <div>
        <List/>
      </div>
    );
  }
}

export default observer(App);

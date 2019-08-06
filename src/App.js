import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';

class App extends Component {
  state={
    userNames : ['nirup','koneru']
  }

  changeStateEventHandler = (event) =>{
    this.setState({
      userNames : [event.target.value,'koneru!!!']
    });
  }

  render() {
    return (
      <div className="App">
        <UserOutput userName={this.state.userNames[0]}/>
        <UserOutput userName={this.state.userNames[1]}/>
        <UserInput onChange={this.changeStateEventHandler} userName={this.state.userNames[0]}/>
      </div>
    );
  }
}

export default App;

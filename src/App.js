import React, { Component } from 'react';

import './App.css';
import Average from './components/Average/Average';
import Table from './components/Table/Table';

class App extends Component {
  state = {
    data: [],
    time: [],
    seconds: []
  };

  componentDidMount() {
    var pushSocket = new WebSocket('ws://localhost:8080');
    // const prices = [];

    pushSocket.onmessage = event => {
      this.setState(prevState => ({
        data: [event.data, ...prevState.data],
        time: [Date(), ...prevState.time],
        seconds: [Date.now() / 1000, ...prevState.seconds]
      }));

      //do ui update here
    };

    pushSocket.onopen = function(event) {
      //send empty message to initialize socket connnection
      pushSocket.send('');
    };

    pushSocket.onclose = function(event) {
      //send empty message to initialize socket connnection
      alert('Socket Closed by Server');
    };
  }

  render() {
    return (
      <div className="App">
        <Average data={this.state.data} seconds={this.state.seconds} />
        <Table data={this.state.data} time={this.state.time} />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import Discover from './components/Discover'

import fetchSessionId from './functions/fetchSessionId'

class App extends Component {
  // constructor (props) {
  //   super (props);
  //   this.state = {
  //     sId: ''
  //   }
  //   // this.getSessionId();
  // }

  // getSessionId = async () => {
  //   // const fetchedSId = await fetchSessionId();
  //   // this.setState({sId:fetchedSId})
  // }

  render() {
    return (
      <div className="App">
        <Discover />
      </div>
    );
  }
}

export default App;

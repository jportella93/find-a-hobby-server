import React, { Component } from 'react';
import './App.css';
import Discover from './components/Discover'
import List from './components/List'
import Navbar from './components/presentational/Navbar'

// import fetchSessionId from './functions/fetchSessionId'

class App extends Component {
  constructor (props) {
    super (props);
    this.state = {
      likedHobbies: [],
      dislikedHobbies: [],
      seenHobbies: [],
      currentView: 'Discover'
    }
  }

  // getSessionId = async () => {
  //   // const fetchedSId = await fetchSessionId();
  //   // this.setState({sId:fetchedSId})
  // }
  setHobbyAsSeen = (hobby) => {
    this.setState({seenHobbies: [...this.state.seenHobbies, hobby]})
  }

  passLikedHobby = (hobby) => {
    this.setState({likedHobbies: [...this.state.likedHobbies, hobby]})
    this.setHobbyAsSeen(hobby);
  }

  passDislikedHobby = (hobby) => {
    this.setState({dislikedHobbies: [...this.state.dislikedHobbies, hobby]})
    this.setHobbyAsSeen(hobby);
  }

  changeView = (currentView) => {
    this.setState({currentView})
  }

  render() {
    let view;
    switch (this.state.currentView) {
      case 'Discover':
        view = (<Discover passLikedHobby={this.passLikedHobby}
          passDislikedHobby={this.passDislikedHobby}
          seenHobbies={this.state.seenHobbies}/>)
        break;
      case 'List':
        view = (<List hobbies={this.state.likedHobbies}/>)
        break;
      default:
      view = (<h1>Default view</h1>);
    }

    return (
      <div className="App">
        <Navbar changeView={this.changeView} />
        {view}
      </div>
    );
  }
}

export default App;

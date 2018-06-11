import React, { Component } from 'react';
import './App.css';
import Logo from './components/presentational/Logo'
import Presentation from './components/presentational/Presentation'
import Discover from './components/Discover'
import List from './components/List'
import PostHobby from './components/PostHobby'
import Navbar from './components/presentational/Navbar'

import ApiClient from './lib/apiClient';

class App extends Component {
  constructor (props) {
    super (props);
    this.state = {
      likedHobbies: [],
      dislikedHobbies: [],
      seenHobbies: [],
      currentView: 'Logo',
      newUser: true,
    }
    this.watchForNewUser();
  }

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

  watchForNewUser = () => {
    const token = window.localStorage.token;
    if (token) this.state = ({
      ...this.state,
      newUser: false
    });
  }

  changeViewAfterLogo = () => {
    console.log('hey');
    this.state.newUser
    ? this.setState({currentView: 'Presentation'})
    : this.setState({currentView: 'Discover'})
  }



  render() {
    let view;
    switch (this.state.currentView) {
      case 'Logo':
      view = <Logo handleClick={this.changeViewAfterLogo} />
      break;
      case 'Presentation':
        view = <Presentation handleClick={() => this.changeView('Discover')}/>
        break;
      case 'Discover':
        view = <Discover passLikedHobby={this.passLikedHobby}
          passDislikedHobby={this.passDislikedHobby}
          seenHobbies={this.state.seenHobbies}
               />
        break;
      case 'List':
        view = <List hobbies={this.state.likedHobbies}/>
        break;
      case 'PostHobby':
        view = <PostHobby />
        break;
      default:
      view = <h1>Oops something went wrong!</h1>
    }

    return (
      <div className="App">
        {this.state.currentView === 'Presentation' ||
          this.state.currentView === 'Logo'
            ? null
          : <Navbar changeView={this.changeView}
            currentView={this.state.currentView}/>
        }
        {view}
      </div>
    );
  }
}

// TODO: refractor css with @import '../main.css' to DRY

export default App;

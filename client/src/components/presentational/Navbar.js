import React, { Component } from 'react';
import './Navbar.css'

class Navbar extends Component {
  // constructor (props) {
  //   super(props);
  //   this.state = {
  //     hobbies : []
  //   }
  //   this.setHobbiesFromProps();
  // }

  render() {
    return (
      <div className="Navbar">
        <button className="PostHobby" onClick={() => this.props.changeView('PostHobby')}
          style={{'visibility': this.props.currentView === 'PostHobby'? 'hidden' : 'visible'}}
        >Post Hobby</button>

        <button className="Discover" onClick={() => this.props.changeView('Discover')}
          style={{'visibility': this.props.currentView === 'Discover'? 'hidden' : 'visible'}}
        >Dicover</button>

        <button className="List" onClick={() => this.props.changeView('List')}
          style={{'visibility': this.props.currentView === 'List'? 'hidden' : 'visible'}}
        >List</button>
      </div>
    );
  }
}

export default Navbar;

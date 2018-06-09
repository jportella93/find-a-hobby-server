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
        <button onClick={() => this.props.changeView('PostHobby')}>Post Hobby</button>
        <button onClick={() => this.props.changeView('Discover')}>Discover</button>
        <button onClick={() => this.props.changeView('List')}>List</button>
      </div>
    );
  }
}

export default Navbar;

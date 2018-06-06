import React, { Component } from 'react';
import './Discover.css';
import HobbyCard from './presentational/HobbyCard'
import fetchRandomHobbies from '../functions/fetchRandomHobbies'

export const numberOfCards = 3;

class Discover extends Component {
  constructor (props) {
    super(props);
    this.state = {
      hobbies : []
    }
    this.setRandomHobbies();
  }

  setRandomHobbies = async () => {
    // TODO: create a seenHobbies array so to avoid showing the same hobby twice.
    const randomHobbies = await fetchRandomHobbies()
    this.setState({hobbies: randomHobbies});
  }

  render() {
    return (
      <div className="Discover">
        {this.state.hobbies.map(hobby => {
          return <HobbyCard key={hobby._id} hobby={hobby}/>
        })}
      </div>
    );
  }
}

export default Discover;

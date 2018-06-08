import React, { Component } from 'react';
import './Discover.css';
import HobbyCard from './presentational/HobbyCard'
import SwipeButtons from './presentational/SwipeButtons'

import fetchRandomHobbies from '../functions/fetchRandomHobbies'
import fetchLikeHobby from '../functions/fetchLikeHobby'
import fetchDislikeHobby from '../functions/fetchDislikeHobby'

import fetchSessionId from '../functions/fetchSessionId'

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
    let randomHobbies = await fetchRandomHobbies();
    randomHobbies = randomHobbies.slice(0, numberOfCards);
    // console.log('random hobbies:',randomHobbies);
    this.setState({hobbies: randomHobbies});
    // console.log('state hobbies:',this.state.hobbies);
  }

  handleOnLike = () => {
    // console.log(this.state.hobbies);
    let hobbies = this.state.hobbies;
    const hobby = hobbies[hobbies.length-1]._id
    fetchLikeHobby(hobby)
    hobbies.pop();
    this.setState({hobbies});
  }

  handleOnDislike = () => {
    let hobbies = this.state.hobbies;
    const hobby = hobbies[hobbies.length-1]._id
    fetchDislikeHobby(hobby)
    hobbies.pop();
    this.setState({hobbies});
  }

  render() {
    return (
      <div className="Discover">
        {this.state.hobbies.map(hobby => {
          return <HobbyCard key={hobby._id} hobby={hobby}/>
        })}
        <SwipeButtons onLike={this.handleOnLike}
          onDislike={this.handleOnDislike}/>
      </div>
    );
  }
}

export default Discover;

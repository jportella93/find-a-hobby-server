import React, { Component } from 'react';
import './Discover.css';
import HobbyCard from './presentational/HobbyCard'
import SwipeButtons from './presentational/SwipeButtons'
import FetchingHobbiesSpinner from './presentational/FetchingHobbiesSpinner'

import fetchRandomHobbies from '../functions/fetchRandomHobbies'
import discardSeenHobbies from '../functions/discardSeenHobbies'
import fetchLikeHobby from '../functions/fetchLikeHobby'
import fetchDislikeHobby from '../functions/fetchDislikeHobby'

// import fetchSessionId from '../functions/fetchSessionId'

export const numberOfCards = 3;
const neededCardsLeftToRefresh = 2;

class Discover extends Component {
  constructor (props) {
    super(props);
    this.state = {
      hobbies : [],
      noHobbies: false,
    }
    this.setRandomHobbies();
  }

  setRandomHobbies = async () => {
    const hobbiesLGTH = this.state.hobbies.length
    if (hobbiesLGTH > neededCardsLeftToRefresh) return;

    let randomHobbies = await fetchRandomHobbies();
    const seenHobbies = [...this.props.seenHobbies, ...this.state.hobbies];
    randomHobbies = discardSeenHobbies(randomHobbies, seenHobbies);
    randomHobbies = randomHobbies.slice(0, numberOfCards);

    this.setState({hobbies: [...randomHobbies, ...this.state.hobbies]});
  }

  handleOnLike = () => {
    // console.log(this.state.hobbies);
    let hobbies = this.state.hobbies;
    if (hobbies.length < 1) return;
    const hobby = hobbies[hobbies.length-1]
    fetchLikeHobby(hobby._id)
    this.props.passLikedHobby(hobby)
    hobbies.pop();
    this.setState({hobbies});
    this.setRandomHobbies();
    this.handleNoHobbies();
  }

  handleOnDislike = () => {
    let hobbies = this.state.hobbies;
    if (hobbies.length < 1) return;
    const hobby = hobbies[hobbies.length-1]
    fetchDislikeHobby(hobby._id)
    this.props.passDislikedHobby(hobby)
    hobbies.pop();
    this.setState({hobbies});
    this.setRandomHobbies();
    this.handleNoHobbies();
  }

  handleNoHobbies = () => {
    if (this.state.hobbies.length !== 0) return;
    this.setState({noHobbies: true})
  }

  render() {
    // console.log('rendering discover with state:', this.state);
    return (
      <div className="Discover">
        {this.state.hobbies.map(hobby => {
          return <HobbyCard key={hobby._id} hobby={hobby}/>
        })}
        {this.state.noHobbies
          ? <FetchingHobbiesSpinner />
          : <SwipeButtons onLike={this.handleOnLike}
            onDislike={this.handleOnDislike}/>}
      </div>
    );
  }
}

export default Discover;

import React, { Component } from 'react';
import './HobbyMiniCard.css'

class HobbyMiniCard extends Component {
  render() {
    return (
      <a href={this.props.hobby.links[0].getStarted}>
        <div className="HobbyMiniCard">
          <img src={this.props.hobby.pictures[0].thumbnail}
            alt={this.props.hobby.name}/>
          <h2>{this.props.hobby.name}</h2>
        </div>
      </a>
    );
  }
}

export default HobbyMiniCard;

import React, { Component } from 'react';

class HobbyCard extends Component {
  render() {
    return (
      <div className="HobbyCard">
        <img src={this.props.hobby.pictures[0].big}
          alt={this.props.hobby.name}/>
        <h1>{this.props.hobby.name}</h1>
        <p>{this.props.hobby.description}</p>
      </div>
    );
  }
}

export default HobbyCard;

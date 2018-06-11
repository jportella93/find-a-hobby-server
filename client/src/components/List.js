import React, { Component } from 'react';
import './List.css'
import HobbyMiniCard from './presentational/HobbyMiniCard'

class List extends Component {
// TODO: add message: no hobbies liked yet
  render() {
    return (
      <div className="List">
        {this.props.hobbies.map(hobby => {
          return <HobbyMiniCard key={'HobbyMiniCard'+hobby._id} hobby={hobby}/>
        })}
      </div>
    );
  }
}

export default List;

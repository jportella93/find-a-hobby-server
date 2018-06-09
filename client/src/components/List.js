import React, { Component } from 'react';
import './List.css'
import HobbyMiniCard from './presentational/HobbyMiniCard'

class List extends Component {
  // constructor (props) {
  //   super(props);
  //   this.state = {
  //     hobbies : []
  //   }
    // this.setHobbiesFromProps();
  // }

  // setHobbiesFromProps = () => {
  //   if (!this.props.hobbies) return;
  //   this.state = {hobbies: this.props.hobbies}
  // }

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

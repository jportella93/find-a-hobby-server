import React, { Component } from 'react';
import './SwipeButtons.css'

class SwipeButtons extends Component {
  render() {
    return (
      <div className="SwipeButtons">
        <a onClick={this.props.onLike} className='box like'>
          <i className="icon-heart"></i>
        </a>
        <a onClick={this.props.onDislike} className='box dislike'>
          <i className="fas fa-times"></i>
        </a>
      </div>
    );
  }
}

export default SwipeButtons;

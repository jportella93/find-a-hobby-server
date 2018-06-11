import React, { Component } from 'react';
import './Logo.css'

class Logo extends Component {
  render () {
    return (
      <div onClick={this.props.handleClick} className='Logo-wrapper'>
        <div className='LogoWrapper-colorHolder'>
          <div className='color1 LogoWrapper-colorBar'></div>
          <div className='color2 LogoWrapper-colorBar'></div>
          <div className='color3 LogoWrapper-colorBar'></div>
        </div>
        <div className='Logo'>
          <h1>find a Hobby!</h1>
        </div>
      </div>
    )
  }
}

// TODO: add number of hobbies available in database under the logo.

export default Logo;

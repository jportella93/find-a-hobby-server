import React, { Component } from 'react';
import './Presentation.css'

class Presentation extends Component {
  render () {
    return (
      <div onClick={this.props.handleClick} className='Presentation-wrapper'>
        <div className='PresentationWrapper-colorHolder'>
          <div className='color1 PresentationWrapper-colorBar'>
          </div>
          <div className='color2 PresentationWrapper-colorBar'>
          </div>
          <div className='color3 PresentationWrapper-colorBar'>
          </div>
        </div>
        <div className='Presentation'>
          <h1>find a Hobby!</h1>
          <br />
          <h3>"Find three hobbies you love: <br /><br />
            one to make you <span className='hobbyName'>money</span>, <br />
            <i className="fas fa-dollar-sign"></i> <br />
            <br />
            one to keep you <span className='hobbyName'>in shape</span>, <br />
            <i className="fas fa-football-ball"></i> <br />
            <br />
            and one to be <span className='hobbyName'>creative</span>."<br />
            <i className="fab fa-fly"></i>
          </h3>
        </div>
      </div>
    )
  }
}

export default Presentation;

import React, { Component } from 'react';
import './HobbyCard.css'

class HobbyCard extends Component {
  constructor (props) {
    super(props);
    this.state = {
      money: this.props.hobby.tags[0].average,
      fit: this.props.hobby.tags[1].average,
      creative: this.props.hobby.tags[2].average
    }
  }

  calculateBars = () => {
    const money = this.state.money
    const fit = this.state.fit
    const creative = this.state.creative
  }

  render() {
    return (
      <div className="HobbyCard">
        <div className='colorHolderWrapper'>
          <div className='color1 topBar'>
            <i className="fas fa-dollar-sign"></i>
          </div>
          <div className='color2 topBar'>
            <i className="fas fa-football-ball"></i>
          </div>
          <div className='color3 topBar'>
            <i className="fab fa-fly"></i>
          </div>
        </div>

        <div className='colorHolder'
          style={{'gridTemplateColumns': `${this.state.money}%
          ${this.state.fit}% ${this.state.creative}%`}}>
          <div className='color1 colorBar'></div>
          <div className='color2 colorBar'></div>
          <div className='color3 colorBar'></div>
        </div>
          <img src={this.props.hobby.pictures[0].big}
            alt={this.props.hobby.name}/>
          <h1>{this.props.hobby.name}</h1>
        <p>{this.props.hobby.description}</p>
      </div>
    );
  }
}

export default HobbyCard;

import React, { Component } from 'react';
import { Button, ButtonGroup } from 'reactstrap';
import './Navbar.css'

class Navbar extends Component {
  constructor (props) {
    super(props);
    this.state = {
    }
  }

  onRadioBtnClick = (rSelected, view) => {
    this.setState({ rSelected });
    this.props.changeView(view)
  }

  render() {
    return (
      <div className="Navbar">

        <ButtonGroup>
          <Button color="primary" onClick={() => this.onRadioBtnClick(1, 'PostHobby')} active={this.state.rSelected === 1}>Post</Button>
          <Button color="primary" onClick={() => this.onRadioBtnClick(2, 'Discover')} active={this.state.rSelected === 2}>Find</Button>
          <Button color="primary" onClick={() => this.onRadioBtnClick(3, 'List')} active={this.state.rSelected === 3}>Liked</Button>
        </ButtonGroup>
      </div>
    );
  }
}

export default Navbar;

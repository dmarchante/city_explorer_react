import React, {Component, Fragment} from 'react';

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 'City Explorer',
      description: 'Enter a location below to learn about the weather, events, restaurants, movies filmed there, and more!',
    }
  }
  
  render() {
    return (
      <Fragment>
        <div className="header-section">
          <h1>{this.state.title}</h1>
          <p>{this.state.description}</p>
        </div>
      </Fragment>
    )
  }
}
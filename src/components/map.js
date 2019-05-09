import React, {Component} from 'react';

export default class Map extends Component {
  constructor(props) {
    super(props);

    this.state = {
      srcPath: 'http://placeimg.com/640/360/any',
      buttonTitle: 'Search',
    }
  }

  render() {
    return (
      <img src={this.state.srcPath} a="placeholder" alt=""></img>
    )
  }
}
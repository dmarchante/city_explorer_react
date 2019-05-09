import React from 'react';

export default class Results extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 'Lorem Ipsum'
    }
  }

  render() {
    return (
      <section>{this.state.title}</section>
    )
  }
}
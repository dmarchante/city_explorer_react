import React, {Fragment} from 'react';

export default class Results extends React.Component {
  render() {
    return (
      <Fragment>
        <h2>{this.props.title}</h2>
        <ul>
          {this.props.children}
        </ul>
      </Fragment>
    )
  }
}


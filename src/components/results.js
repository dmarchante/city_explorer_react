import React, {Fragment} from 'react';

export default class Results extends React.Component {
  render() {
    console.log('results');
    return (
      <Fragment>
        <div className="result-section_item">
          <h2>{this.props.title}</h2>
          <ul>
            {this.props.children}
          </ul>
        </div>
      </Fragment>
    )
  }
}


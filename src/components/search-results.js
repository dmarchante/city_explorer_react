import React, { Component, Fragment } from 'react';
import Results from './results.js'

export default class SearchResults extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    // let weatherData = this.props.weatherData.map((weather, index) => <li key={index}>The forecast for {weather.time} is: {weather.forecast}</li>);

    return (
    <Fragment>
      <Results api={this.props.apiUrl} location={this.props.location} title="Dark Sky">
        {/* {this.props.weatherData.map((weather, index) => <li key={index}>{weather}</li>).map(weather => weather)} */}
      </Results>
      <Results api={this.props.apiUrl} location={this.props.location} title="Yelp"></Results>
      <Results api={this.props.apiUrl} location={this.props.location} title="Eventbrite"></Results>
      <Results api={this.props.apiUrl} location={this.props.location} title="Movie"></Results>
    </Fragment>
    )
  }
}

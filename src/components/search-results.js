import React, { Component, Fragment } from 'react';
import superagent from 'superagent';
import Results from './results.js';
// import If from './if.js';

export default class SearchResults extends Component {
  constructor(props) {
    super(props);

    this.state = {
      weatherData: null,
      yelpData: null,
      eventsData: null,
      movieData: null,
    }
  }

  async componentDidMount() {
    let weatherData = await this.handleResourceRequests('weather');
    let yelpData = await this.handleResourceRequests('yelp');
    let eventsData = await this.handleResourceRequests('events');
    let movieData = await this.handleResourceRequests('movies');

    this.setState({
      weatherData,
      yelpData,
      eventsData,
      // movieData,
    })

    console.log('ran didMount')
  }

  handleResourceRequests = (resource) => {
    return superagent.get(`${this.props.apiUrl}/${resource}`, {data: this.props.location})
      .then(results => results.body);
  }
  
  render() {
    let dailyWeather;
    let yelp;
    let events;
    let movies;

    if (this.state.weatherData !== null) {
      dailyWeather = this.state.weatherData.map((weather, index) => <li key={index}>The forecast for {weather.time} is: {weather.forecast}</li>);
    }

    if (this.state.yelpData !== null) {
      yelp = this.state.yelpData.map((yelp, index) => <li key={index}><a href={yelp.url}>{yelp.name}</a><p>The average rating is {yelp.rating} out of 5 and the price is {yelp.price} out of 4</p><img src={yelp.image_url}></img></li>);
    }

    if (this.state.eventsData !== null) {
      events = this.state.eventsData.map((event, index) => <li key={index}><a href={event.link}>{event.name}</a><p>Event Date: {event.event_date}</p><p>{event.summary}</p></li>);
    }
  
    if (this.state.movieData) {
      console.log(this.state.movieData)
      // movies = this.state.movieData.map((movie, index) => <li key={index}>{movie}</li>);
    }

    return (
      <Fragment>
      <Results title="Dark Sky">
        {dailyWeather}
      </Results>
      <Results title="Yelp">
        {yelp}
      </Results>
      <Results title="Eventbrite">
        {events}
      </Results>
      <Results title="Movie">
        {movies}
      </Results>
    </Fragment>
    )
  }
}

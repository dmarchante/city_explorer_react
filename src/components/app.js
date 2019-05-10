import React, { Component, Fragment } from 'react';
import superagent from 'superagent';
import Header from './header.js';
import Map from './map.js';
import SearchResults from './search-results.js';
import SearchForm from './search-form';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: {},
      weatherData: {},
      yelpData: {},
      eventsData: {},
      movieData: {},
      resource: '',
      apiUrl: 'https://still-caverns-25372.herokuapp.com'
    }
  }

  setSearchQuery = e => {
    e.preventDefault();

    this.setState({searchQuery: e.target.value});
  }

  handleLocationRequests = e => {
    e.preventDefault();

    const searchQuery = e.target.childNodes[0].value;

    superagent.get(`${this.state.apiUrl}/location?data=${searchQuery}`)
      .then(response => {
        this.setState({location: response.body});
        this.handleResourceRequests('weather');
        this.handleResourceRequests('yelp');
        this.handleResourceRequests('events');
        this.handleResourceRequests('movies');
      });
  }

  handleResourceRequests = (resource) => {
    superagent.get(`${this.state.apiUrl}/${resource}`, {data: this.state.location})
      .then(results => {
        if (resource === 'weather') {
          this.setState({weatherData: results.body});
          console.log(this.state.weatherData);
        } else if (resource === 'yelp') {
          this.setState({yelpData: results.body});
          console.log(this.state.yelpData);
        } else if (resource === 'events') {
          this.setState({eventsData: results.body});
          console.log(this.state.eventsData);
        } else if (resource === 'movies') {
          this.setState({moviesData: results.body});
          console.log(this.state.moviesData);
        }
      })
  }

  render() {
    return (
    <Fragment>
      <SearchForm setSearchQuery={this.setSearchQuery} results={this.handleLocationRequests}></SearchForm>
      <Map location={this.state.location}></Map>
      <SearchResults api={this.state.apiUrl} resource={this.setResource} weatherData={this.state.weatherData}></SearchResults>
    </Fragment>
    )
  }
}

function App() {
  return (
    <Fragment>
      <Header></Header>
      <Main></Main>
    </Fragment>
  );
}

export default App;

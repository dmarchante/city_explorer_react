import React, { Component, Fragment } from 'react';
import superagent from 'superagent';
import Header from './header.js';
import Map from './map.js';
import SearchResults from './search-results.js';
import SearchForm from './search-form.js';
import If from './if.js';
import '../scss/core.scss'

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: null,
      searchQuery: '',
      apiUrl: 'https://still-caverns-25372.herokuapp.com'
    }
  }

  handleLocationRequests = e => {
    e.preventDefault();

    const searchQuery = e.target.childNodes[0].value;

    superagent.get(`${this.state.apiUrl}/location?data=${searchQuery}`)
      .then(response => {
        this.setState({
          location: response.body
        });
      });
  }

  render() {
    return (
    <Fragment>
      <SearchForm results={this.handleLocationRequests}></SearchForm>
      <If condition={this.state.location !== null}>
        <Map location={this.state.location}></Map>
        <SearchResults
          apiUrl={this.state.apiUrl}
          location={this.state.location}
        ></SearchResults>
      </If>
    </Fragment>
    )
  }
}

function App() {
  return (
    <Fragment>
      <div className="container">
        <Header></Header>
        <Main></Main>
      </div>
    </Fragment>
  );
}

export default App;

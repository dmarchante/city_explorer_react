import React, { Component } from 'react';
import superagent from 'superagent';
import Header from './header.js';
import Map from './map.js';
import SearchResults from './search-results.js';
import SearchForm from './search-form';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: {}
    }
  }

  setSearchQuery = e => {
    e.preventDefault();

    this.setState({searchQuery: e.target.value});
  }

  handleAPIRequests = e => {
    e.preventDefault();

    let searchQuery = e.target.childNodes[0].value;
    console.log(searchQuery);

    superagent.get(`https://still-caverns-25372.herokuapp.com/location?data=${searchQuery}`)
      .then(data => {
        this.setState({location: data.body});
        console.log(this.state.location);
      });
  }

  render() {
    return (
    <>
      <SearchForm setSearchQuery={this.setSearchQuery} results={this.handleAPIRequests}></SearchForm>
      <Map location={this.state.location}></Map>
      <SearchResults></SearchResults>
    </>
    )
  }
}

function App() {
  return (
    <>
      <Header></Header>
      <Main></Main>
    </>
  );
}

export default App;

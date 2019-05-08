import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 'City Explorer',
      description: 'Enter a location below to learn about the weather, events, restaurants, movies filmed there, and more!',
    }
  }
  
  render() {
    return (
      <React.Fragment>
        <h1>{this.state.title}</h1>
        <p>{this.state.description}</p>
      </React.Fragment>
    )
  }
}


class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchPlaceholder: 'Enter Location',
      buttonTitle: 'Search',
    }
  }

  render() {
    return (
    <React.Fragment>
      <div>
        <input placeholder={this.state.searchPlaceholder}></input>
        <button>{this.state.buttonTitle}</button>
      </div>
    </React.Fragment>
    )
  }
  
}

class Map extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      srcPath: 'http://placeimg.com/640/360/any',
      buttonTitle: 'Search',
    }
  }

  render() {
    return (
      <div>
        <img src={this.state.srcPath} a="placeholder" alt=""></img>
      </div>
    )
  }
}

class Results extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 'Lorem Ipsum'
    }
  }

  render() {
    return (
      <div>
        <section>{this.state.title}</section>
      </div>
    )
  }
}

class Main extends React.Component {
  render() {
    return (
    <React.Fragment>
      <Search></Search>
      <Map></Map>
      <Results></Results>
      <Results></Results>
      <Results></Results>
      <Results></Results>
      <Results></Results>
    </React.Fragment>
    )
  }
}

function App() {
  return (
    <React.Fragment>
      <Header></Header>
      <Main></Main>
    </React.Fragment>
  );
}

export default App;

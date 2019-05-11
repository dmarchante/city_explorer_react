import React, { Component, Fragment } from 'react';

export default class SearchForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchPlaceholder: 'Enter Location',
      buttonTitle: 'Search',
    }
  }

  render() {
    return ( 
    <Fragment>
      <div className="search-form">
        <form onSubmit={this.props.results}>
          <input id="searchQuery" name="searchQuery" type="text" placeholder={this.state.searchPlaceholder}></input>
          <button type="submit">{this.state.buttonTitle}</button>
        </form>
      </div>
    </Fragment>
    )
  }
}
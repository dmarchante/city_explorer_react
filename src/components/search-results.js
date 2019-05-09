import React, { Component } from 'react';
import Results from './results.js'

export default class SearchResults extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
    <>
      <Results></Results>
      <Results></Results>
      <Results></Results>
      <Results></Results>
    </>
    )
  }
}
import React, {Component} from 'react';

export default class Map extends Component {
  render() {
    const geocodeKey = process.env.REACT_APP_GEOCODE_API_KEY;
    let url = `https://maps.googleapis.com/maps/api/staticmap?center=${this.props.location.latitude}%2c%20${this.props.location.longitude}&zoom=13&size=600x300&maptype=roadmap
    &key=${geocodeKey}`
    return (
    <>
      <img id="map" src={url} alt="Map of search query"/>
    </>
    )
  }
}

import React, {Component, Fragment} from 'react';

export default class Map extends Component {
  render() {
    const geocodeKey = process.env.REACT_APP_GEOCODE_API_KEY;
    const url = `https://maps.googleapis.com/maps/api/staticmap?center=${this.props.location.latitude}%2c%20${this.props.location.longitude}&zoom=13&size=600x300&maptype=roadmap
    &key=${geocodeKey}`

    return (
    <Fragment>
      <div className="map-section">
        <img id="map" src={url} alt="Map of search query"/>
      </div>
    </Fragment>
    )
  }
}

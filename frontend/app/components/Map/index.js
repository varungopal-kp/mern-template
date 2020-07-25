import React, { Component, Fragment } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import { styles } from './style';
export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    };
  }

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });

  onMapClicked = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };

  render() {
    const feplaces = [
      ['Mesaieed', 24.9533729, 51.4942311, 4],
      ['Al Kharj', 24.1561666, 47.1710425, 2],
      ['Ras Abu', 24.5753801, 51.45524, 3],
      ['Buraydah', 26.3476129, 43.7833376, 1],
    ];

    return (
      <Map
        google={this.props.google}
        zoom={7}
        styles={styles}
        initialCenter={{ lat: 25.1813883, lng: 49.0172562 }}
      >
        {feplaces.map((_map, i) => (
          <Marker
            onClick={this.onMarkerClick}
            name={_map[0]}
            icon={{
              url:
                'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
              size: new google.maps.Size(20, 32),

              origin: new google.maps.Point(0, 0),

              anchor: new google.maps.Point(0, 32),
            }}
            position={{ lat: _map[1], lng: _map[2] }}
            zIndex={_map[3]}
          />
        ))}

        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
        >
          <div>
            <h1>
              <div id="content">
                <div className="heading">
                  <h3>Place Details</h3>
                </div>
                <div className="img-box">
                  <img src={require('../../public/images/map-sample.png')} />
                </div>
                <div className="dtls">
                  <h4 className="name">Morocco</h4>
                  <h5 className="cntry">North Africa</h5>
                  <p className="descri">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce id ligula aliquam, malesuada ex ac, auctor nibh.
                    lectus
                  </p>
                  <p className="days">12 days and 11 Nights</p>
                  <p className="price">$ 1200</p>
                  <ul className="row">
                    <li className="col-xs-12">
                      <a href="#">Book Now</a>
                    </li>
                    <li className="col-xs-12">
                      <a href="#">View Details</a>
                    </li>
                  </ul>
                </div>
              </div>
            </h1>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBLUx69McLp0E2ovIwlGf9TMf3ZCGovJBQ',
})(MapContainer);

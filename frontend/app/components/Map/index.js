import React, { Component, Fragment } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import { styles } from './style';

const baseUrl = process.env.BASE_URL;

export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      infoWindowData: false,
    };
  }

  componentDidMount() {
    this.props.getMap();
  }

  onMarkerClick = (props, marker, e, data) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
      infoWindowData: data,
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
    const { mapData } = this.props;
    const { infoWindowData } = this.state;
    if (mapData && mapData.length) {
      return (
        <Map
          google={this.props.google}
          zoom={7}
          styles={styles}
          initialCenter={{ lat: 25.1813883, lng: 49.0172562 }}
        >
          {mapData.map((_map, i) => (
            <Marker
              onClick={(props, marker, e) =>
                this.onMarkerClick(props, marker, e, _map)
              }
              name={_map.name}
              icon={{
                url:
                  'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
                size: new google.maps.Size(20, 32),

                origin: new google.maps.Point(0, 0),

                anchor: new google.maps.Point(0, 32),
              }}
              position={{ lat: _map.lat, lng: _map.lon }}
              zIndex={5}
            />
          ))}

          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
          >
            <div>
              {infoWindowData && (
                <h1>
                  <div id="content">
                    <div className="heading">
                      <h3>Place Details</h3>
                    </div>
                    <div className="img-box">
                      <img
                        src={`${baseUrl}${infoWindowData.image}`}
                        alt={infoWindowData.name}
                      />
                    </div>
                    <div className="dtls">
                      <h4 className="name">{infoWindowData.name}</h4>
                      <h5 className="cntry">{infoWindowData.city.name}</h5>
                      <p className="descri">{infoWindowData.description}</p>
                      <p className="price">$ {infoWindowData.price}</p>
                    </div>
                  </div>
                </h1>
              )}
            </div>
          </InfoWindow>
        </Map>
      );
    }
    return (
      <Map
        google={this.props.google}
        zoom={7}
        styles={styles}
        initialCenter={{ lat: 25.1813883, lng: 49.0172562 }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBLUx69McLp0E2ovIwlGf9TMf3ZCGovJBQ',
})(MapContainer);

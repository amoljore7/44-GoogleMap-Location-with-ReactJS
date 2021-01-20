import React, { Component } from "react";
import {
  withGoogleMap,
  GoogleMap,
  withScriptjs,
  InfoWindow,
  Marker,
} from "react-google-maps";
import Geocode from "react-geocode";

Geocode.setApiKey("AIzaSyATu9bSEClphiWJSHSqWRyfiv1Ye43CFHA");
Geocode.enableDebug();

class Map extends Component {
  constructor(props) {
    super(props);
  }

  getLink = (sts, cnt, spin, clr) => {
    const imgLink = {
      url: `https://chart.googleapis.com/chart?chst=d_map_spin&chld=1.1|${
        this.props.multiple ? +spin : 0
      }|${clr}|16|b|${sts + (cnt > 1 ? cnt : "")}`,
    };
    return imgLink.url;
  };

  onInfoWindowClose = (event) => {};

  getLinkCenter = (sts, spin, clr) => {
    const imgLink = {
      url: `https://chart.googleapis.com/chart?chst=d_map_spin&chld=1.1|${
        this.props.multiple ? +spin : 0
      }|${clr}|16|b|${sts}`,
    };
    return imgLink.url;
  };

  render() {
    const AsyncMap = withScriptjs(
      withGoogleMap((props) => (
        <GoogleMap
          google={this.props.google}
          defaultZoom={this.props.zoom}
          defaultCenter={{
            lat: this.props.center.lat,
            lng: this.props.center.lng,
          }}
        >
          <Marker
            key={{ lat: this.props.center.lat, lng: this.props.center.lng }}
            google={this.props.google}
            icon={this.getLinkCenter("B", 90, "bada55")}
            animation={1}
            position={{
              lat: this.props.center.lat,
              lng: this.props.center.lng,
            }}
          />
          {this.props.latLangValue &&
            this.props.latLangValue.coordinate &&
            this.props.latLangValue.coordinate.length &&
            this.props.latLangValue.coordinate.map((pos, i) => (
              <Marker
                key={pos.latitude + pos.longitude}
                google={this.props.google}
                icon={this.getLink("C", pos.count, 90, "FF7F50")}
                position={{ lat: +pos.latitude, lng: +pos.longitude }}
              />
            ))}
        </GoogleMap>
      ))
    );
    let map;
    if (
      this.props &&
      this.props.center &&
      this.props.center.lat !== undefined
    ) {
      map = (
        <div>
          <AsyncMap
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyATu9bSEClphiWJSHSqWRyfiv1Ye43CFHA&libraries=places"
            loadingElement={<div style={{ height: "100%" }} />}
            containerElement={<div style={{ height: this.props.height }} />}
            mapElement={<div style={{ height: "100%" }} />}
          />
        </div>
      );
    } else {
      map = <div style={{ height: this.props.height }} />;
    }
    return map;
  }
}

export default Map;
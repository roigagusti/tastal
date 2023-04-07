import React, { Component } from "react";
import ReactMapboxGl from "react-mapbox-gl";
import { Marker } from 'react-mapbox-gl';
import {MarkerIcon} from "./../tastal-items.js"

import "@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css";
import "./map.css";


const Map = ReactMapboxGl({
  accessToken:"pk.eyJ1Ijoicm9pZ2FndXN0aSIsImEiOiJja2R5ZHcwbWMxMDhjMnNxaWJkeXM3ZHdwIn0.Zc3m8sksEEfxTZ3991xkkw"
});

class MapComponent extends Component {
  state = {
    markers: [
      { coordinates: [2.1647093,41.401759] },
      { coordinates: [2.1547093,41.411759] },
      { coordinates: [2.1147093,41.421759] },
      { coordinates: [2.1447093,41.431759] }
    ]
  };

  render() {
    return (
      <Map id="map"
        style="mapbox://styles/mapbox/light-v11"
        containerStyle={{
          height: "100vh",
          width: "100vw"
        }}
        zoom={[12]}
        center={[2.1647093,41.401759]}
        >
        {this.state.markers.map(marker => (
          <Marker coordinates={marker.coordinates}><MarkerIcon /></Marker>
        ))}
      </Map>
    );
  }
}

export default MapComponent;
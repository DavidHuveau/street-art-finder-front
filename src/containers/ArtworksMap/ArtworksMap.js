import React, { Component } from 'react';
import MapWithLeaflet from "../../components/cartography/MapWithLeaflet/MapWithLeaflet";

class ArtworksMap extends Component {
  render() {
    return (
      <div style={ {border: "solid 1px blue"} }>
        {/* ArtworksMap */}
        <MapWithLeaflet />
      </div>
    )
  }
}

export default ArtworksMap;

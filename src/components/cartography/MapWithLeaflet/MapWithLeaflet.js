import React from "react";
import "./MapWithLeaflet.css";
import "leaflet/dist/leaflet.css";
import "react-leaflet-markercluster/dist/styles.min.css";
import { Map, TileLayer, Circle } from "react-leaflet";
import MarkerLocation from "../MarkerLocation/MarkerLocation";
import MarkerClusterGroup from "../MarkerClusterGroup/MarkerClusterGroup";

const START_POSITION = [49.257786, 4.031926]; // Reims, France
const ZOOM = 12;

export default props => {
  const { showArtworkInfosPane, artworks, startPosition } = props;
  let centerPosition =
    startPosition.length === 0 ? START_POSITION : startPosition;

  return (
    <Map className="MyMap" center={centerPosition} zoom={ZOOM} maxZoom={20}>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MarkerClusterGroup showCoverageOnHover={false}>
        {artworks.slice(0, 1000).map((artworkInfos, i) => (
          <MarkerLocation
            key={i}
            mark={artworkInfos}
            showArtworkInfosPane={() => showArtworkInfosPane(artworkInfos)}
          />
        ))}
      </MarkerClusterGroup>
      <Circle
        center={centerPosition}
        fillColor="red"
        bubblingMouseEvents={false}
        radius={200}
      />
    </Map>
  );
};

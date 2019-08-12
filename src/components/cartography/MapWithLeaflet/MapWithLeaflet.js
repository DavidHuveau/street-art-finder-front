import React from "react";
import "./MapWithLeaflet.css";
import "leaflet/dist/leaflet.css";
import "react-leaflet-markercluster/dist/styles.min.css";
import { Map, TileLayer, Circle } from "react-leaflet";
import MarkerLocation from "../MarkerLocation/MarkerLocation";
import MarkerClusterGroup from "../MarkerClusterGroup/MarkerClusterGroup";
import dataWithGeo from "../../../constants/data-with-geo";

const START_POSITION = [49.257786, 4.031926];
const ZOOM = 13;

export default () => {
  return (
    <Map className="MyMap" center={START_POSITION} zoom={ZOOM} maxZoom={20}>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MarkerClusterGroup showCoverageOnHover={false}>
        {dataWithGeo.slice(0, 1000).map((e, i) => (
          <MarkerLocation key={i} mark={e} />
        ))}
      </MarkerClusterGroup>
      <Circle
        center={START_POSITION}
        fillColor="red"
        bubblingMouseEvents={false}
        radius={200}
      />
    </Map>
  );
};

import React from "react";
import "./MapWithLeaflet.css";
import "leaflet/dist/leaflet.css";
import "react-leaflet-markercluster/dist/styles.min.css";
import { Map, TileLayer, Circle } from "react-leaflet";
import FilmingLocation from "../FilmingLocation/FilmingLocation";
import MarkerClusterGroup from "../MarkerClusterGroup/MarkerClusterGroup";
import dataWithGeo from "../../../constants/data-with-geo";

const GEO_SAN_FRANSISCO = [37.77492, -122.41941];
const ZOOM = 13;

const handleMap = event => {
  console.log("handleMap: ", event.latlng);
};

export default () => {
  return (
    <Map
      className="MyMap"
      center={GEO_SAN_FRANSISCO}
      zoom={ZOOM}
      onClick={handleMap}
      maxZoom={20}
    >
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MarkerClusterGroup showCoverageOnHover={false}>
        {dataWithGeo.slice(0, 1000).map((e, i) => (
          <FilmingLocation key={i} mark={e} />
        ))}
      </MarkerClusterGroup>
      <Circle
        center={GEO_SAN_FRANSISCO}
        fillColor="red"
        bubblingMouseEvents={false}
        radius={200}
      />
    </Map>
  );
};

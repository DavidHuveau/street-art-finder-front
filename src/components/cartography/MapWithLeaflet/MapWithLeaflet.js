import React from "react";
import "./MapWithLeaflet.css";
import "leaflet/dist/leaflet.css";
import "react-leaflet-markercluster/dist/styles.min.css";
import { Map, TileLayer, Circle, Polygon} from "react-leaflet";
import FilmingLocation from "../FilmingLocation/FilmingLocation";
import MarkerClusterGroup from "../MarkerClusterGroup/MarkerClusterGroup";
import dataWithGeo from "../../../constants/data-with-geo";


const GEO_SAN_FRANSISCO = [37.77492, -122.41941]
const MASK_GEO_LIMIT_LATITUD = 1;
const MASK_GEO_LIMIT_LONGITUD = 1;

const ZOOM = 13;

const maskGeoPolygon = [
  [(Math.trunc(GEO_SAN_FRANSISCO[0] * 10) / 10) - MASK_GEO_LIMIT_LATITUD / 2, (Math.trunc(GEO_SAN_FRANSISCO[1] * 10) / 10) + MASK_GEO_LIMIT_LONGITUD / 2],
  [(Math.trunc(GEO_SAN_FRANSISCO[0] * 10) / 10) - MASK_GEO_LIMIT_LATITUD / 2, (Math.trunc(GEO_SAN_FRANSISCO[1] * 10) / 10) - MASK_GEO_LIMIT_LONGITUD / 2],
  [(Math.trunc(GEO_SAN_FRANSISCO[0] * 10) / 10) + MASK_GEO_LIMIT_LATITUD / 2, (Math.trunc(GEO_SAN_FRANSISCO[1] * 10) / 10) - MASK_GEO_LIMIT_LONGITUD / 2],
  [(Math.trunc(GEO_SAN_FRANSISCO[0] * 10) / 10) + MASK_GEO_LIMIT_LATITUD / 2, (Math.trunc(GEO_SAN_FRANSISCO[1] * 10) / 10) + MASK_GEO_LIMIT_LONGITUD / 2]
]

const maskGeo = (array) => {
  if(
    array.geo[1] < (Math.trunc(GEO_SAN_FRANSISCO[1] * 10) / 10) + MASK_GEO_LIMIT_LONGITUD / 2
    && array.geo[1] > (Math.trunc(GEO_SAN_FRANSISCO[1] * 10) / 10) - MASK_GEO_LIMIT_LONGITUD / 2
    && array.geo[0] < (Math.trunc(GEO_SAN_FRANSISCO[0] * 10) / 10) + MASK_GEO_LIMIT_LATITUD / 2
    && array.geo[0] > (Math.trunc(GEO_SAN_FRANSISCO[0] * 10) / 10) - MASK_GEO_LIMIT_LATITUD / 2
  )
  return array;
}

const handleClickCircle = () => {
    console.log("handleClickCircle");
}

const handleMap = (event) => {
    console.log("handleMap: ", event.latlng);
}

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
            attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <MarkerClusterGroup showCoverageOnHover={false}>
            {dataWithGeo.slice(0, 1000).filter(f => maskGeo(f)).map((e, i) =>
              <FilmingLocation
                key={i}
                mark={e}
              ></FilmingLocation>
            )}
            {/* <Marker
              position={position}
              icon={myIcon}
              bubblingMouseEvents={false}
              onClick={this.handleMarker}
            >
              <Popup>
                {dataWithGeo[0].location}<br/>{position[0]}<br/>{position[1]}
                <button onClick={this.handleButton}>bouton</button>
              </Popup>
            </Marker> */}
          </MarkerClusterGroup>
          <Circle
            center={GEO_SAN_FRANSISCO}
            fillColor="red"
            bubblingMouseEvents={false}
            onClick={handleClickCircle}
            radius={200}>
          </Circle>
          {/* <Polygon color="purple" positions={maskGeoPolygon} /> */}
        </Map>
    )
}
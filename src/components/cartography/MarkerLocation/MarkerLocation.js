import React from "react";
import "./MarkerLocation.css";
import { Marker, Popup } from "react-leaflet";
import L from "leaflet";
import icon from "./icon.png";
import { Button } from "react-bootstrap";

// const THUMBNAIL_WIDTH = 200;

const myIcon = L.icon({
  iconUrl: icon,
  iconSize: [50, 50],
  iconAnchor: [30, 50],
  popupAnchor: [-3, -76]
});

export default props => {
  const { showArtworkInfosPane } = props;
  const { location: position, photoFileName } = props.mark;

  return (
    <Marker position={position.coordinates} icon={myIcon}>
      <Popup>
        <figure>
          <img
            src={`/api/v1/public/thumbnails/${photoFileName}`}
            alt={photoFileName}
            // width="200px"
          />
        </figure>
        <br />
        <Button onClick={showArtworkInfosPane}>Show</Button>
      </Popup>
    </Marker>
  );
};

import React from "react";
import "./MarkerLocation.css";
import { Marker, Popup } from "react-leaflet";
import L from "leaflet";
import icon from "./icon.png";
import { Button } from "react-bootstrap";

// const THUMBNAIL_WIDTH = 200;
// const THUMBNAIL_HEIGHT = 200;

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
        {/* <b>{_id}</b>
        <div>{`[${position.coordinates[0]},${position.coordinates[1]}]`}</div>
        <div>{photoFileName}</div> */}
        <img
          src="https://placem.at/places?w=100&h=100&random=1"
          alt={photoFileName}
          width="100px"
        />
        <br />
        <Button onClick={showArtworkInfosPane}>Show</Button>
      </Popup>
    </Marker>
  );
};

import React from "react";
import { Marker, Popup } from "react-leaflet";
import L from "leaflet";
import icon from "./icon.png";

const myIcon = L.icon({
  iconUrl: icon,
  iconSize: [50, 50],
  iconAnchor: [30, 50],
  popupAnchor: [-3, -76]
});

export default props => {
  const { location: position, _id, description, photoFileName } = props.mark;
  return (
    <Marker position={position.coordinates} icon={myIcon}>
      <Popup>
        <b>{_id}</b>
        <b>{description}</b>
        <div>{`[${position.coordinates[0]},${position.coordinates[1]}]`}</div>
        <div>{photoFileName}</div>
      </Popup>
    </Marker>
  );
};

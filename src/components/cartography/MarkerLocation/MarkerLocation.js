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

export default (props) => {
  const { geo: position, location } = props.mark;
  return (
    <Marker position={position} icon={myIcon}>
      <Popup>
        <b>{location}</b>
      </Popup>
    </Marker>
  );
};

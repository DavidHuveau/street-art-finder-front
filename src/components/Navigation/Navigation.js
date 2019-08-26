import React from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";

const Navigation = ({path, caption}) => {
  return (
    <div id="Nav-wrapper">
      <Link to={path} className="Nav-link btn btn-primary">
        {caption}
      </Link>
    </div>
  );
};

export default Navigation;

import React from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div id="Nav-wrapper">
      <Link to="/suggest" className="Nav-link btn btn-primary">
        Suggest
      </Link>
    </div>
  );
};

export default Navigation;

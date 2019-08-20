import React from "react";
import "./Navigation.css";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div id="Nav-wrapper">
      <Nav
        className="justify-content-center"
        variant="pills"
        defaultActiveKey="/"
        // onSelect={selectedKey => alert(`selected ${selectedKey}`)}
      >
        <Nav.Item bsPrefix="Nav-item">
          {/* <Nav.Link href="/">Explore</Nav.Link> */}
          <NavLink exact to="/">Explore</NavLink>
        </Nav.Item>
        <Nav.Item bsPrefix="Nav-item">
          {/* <Nav.Link eventKey="suggest">Suggest</Nav.Link> */}
          <NavLink to="/suggest">Suggest</NavLink>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default Navigation;

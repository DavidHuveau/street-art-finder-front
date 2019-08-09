import React from "react";
import "./Navigation.css";
import { Nav } from "react-bootstrap";

const Navigation = () => {
  return (
    <div id="Nav-wrapper">
      <Nav
        className="justify-content-center"
        variant="pills"
        defaultActiveKey="/home"
        onSelect={selectedKey => alert(`selected ${selectedKey}`)}
      >
        <Nav.Item bsPrefix="Nav-item">
          <Nav.Link href="/home">Explore</Nav.Link>
        </Nav.Item>
        <Nav.Item bsPrefix="Nav-item">
          <Nav.Link eventKey="suggest">Suggest</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default Navigation;

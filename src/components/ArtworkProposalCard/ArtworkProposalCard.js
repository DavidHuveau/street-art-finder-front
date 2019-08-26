import React from "react";
import "./ArtworkProposalCard.css";
import { Card, ListGroup, ListGroupItem, Button } from "react-bootstrap";

const ArtworkProposalCard = props => {
  return (
    <Card>
      <div className="Prop-preview-pic">
        <Card.Img
          variant="top"
          src="http://localhost:8080/api/v1/public/thumbnails/c1539d7d0dbf889b4b6fd13029827f88.png"
        />
        <div className="Prop-preview-buttons">
          <Button className="float-right ml-2" size="sm" variant="success">
            Publish
          </Button>
          <Button className="float-right" size="sm" variant="danger">
            No Publish
          </Button>
        </div>
      </div>
      <Card.Body>
        <Card.Title>26 bis boulevard pasteur, 51100, REIMS</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">France</Card.Subtitle>
        <Card.Text>Description</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem className="text-muted">
        <small className="text-muted">Created August 19, 2019</small><br />

          <small>
            Suggested by <span className="main-color">Toto</span>
          </small>
        </ListGroupItem>
      </ListGroup>
    </Card>
  );
};

export default ArtworkProposalCard;

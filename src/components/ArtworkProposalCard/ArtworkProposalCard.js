import React from "react";
import "./ArtworkProposalCard.css";
import { Card, ListGroup, ListGroupItem, Button } from "react-bootstrap";
import moment from "moment";

const ArtworkProposalCard = ({
  artwork,
  publishProposal,
  noPublishProposal
}) => {
  const {
    _id,
    userName,
    adressStreet,
    zipCode,
    city,
    country,
    createdAt,
    description,
    photoFileName
  } = artwork;

  const renderDateInfo = date => {
    moment.locale();
    const displayDate = moment(date).format("LL");
    return <>{`Created ${displayDate}`}</>;
  };

  return (
    <Card>
      <div className="Prop-preview-pic">
        <figure>
          <Card.Img
            variant="top"
            src={`http://localhost:8080/api/v1/public/thumbnails/${photoFileName}`}
            alt={photoFileName}
          />
        </figure>
        <div className="Prop-preview-buttons">
          <Button
            size="sm"
            variant="success"
            onClick={() => publishProposal(_id)}
          >
            Publish
          </Button>
          <Button
            size="sm"
            variant="danger"
            onClick={() => noPublishProposal(_id)}
          >
            No Publish
          </Button>
        </div>
      </div>
      <Card.Body>
        <Card.Title>{`${adressStreet}, ${zipCode}, ${city}`}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {country.name}
        </Card.Subtitle>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem className="text-muted">
          <small className="text-muted">{renderDateInfo(createdAt)}</small>
          <br />
          <small>
            Suggested by <span className="main-color">{userName}</span>
          </small>
        </ListGroupItem>
      </ListGroup>
    </Card>
  );
};

export default ArtworkProposalCard;

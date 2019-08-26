import React, { Fragment } from "react";
import "./ArtworksProposalsList.css";
import { CardDeck } from "react-bootstrap";
import ArtworkProposalCard from "../../components/ArtworkProposalCard/ArtworkProposalCard";

const ArtworksProposalsList = props => {
  return (
    <Fragment>
      <small className="text-muted ml-2">333 proposal(s) to valide</small>
      <CardDeck className="proposals-list-container">
        <ArtworkProposalCard />
        <ArtworkProposalCard />
        {/* <ArtworkProposalCard /> */}
        {/* <ArtworkProposalCard />
      <ArtworkProposalCard /> */}
      </CardDeck>
    </Fragment>
  );
};

export default ArtworksProposalsList;

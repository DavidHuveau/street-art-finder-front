import React from "react";
import "./ArtworksProposalsList.css";
import { CardDeck } from "react-bootstrap";
import ArtworkProposalCard from "../../components/ArtworkProposalCard/ArtworkProposalCard";

const ArtworksProposalsList = props => {
  return (
    <div className="proposals-list-container">
      <small className="text-muted ml-2">333 proposal(s) to valide</small>
      <CardDeck>
        <ArtworkProposalCard />
        <ArtworkProposalCard />
        {/* <ArtworkProposalCard /> */}
        {/* <ArtworkProposalCard />
      <ArtworkProposalCard /> */}
      </CardDeck>
    </div>
  );
};

export default ArtworksProposalsList;

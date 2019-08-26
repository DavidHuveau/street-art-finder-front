import React from "react";
import "./ArtworksProposalsList.css";
import { CardDeck } from "react-bootstrap";
import ArtworkProposalCard from "../../components/ArtworkProposalCard/ArtworkProposalCard";

const ArtworksProposalsList = props => {
  return (
    <CardDeck className="proposals-list-container">
      <ArtworkProposalCard />
      <ArtworkProposalCard />
      <ArtworkProposalCard />
    </CardDeck>
  );
};

export default ArtworksProposalsList;

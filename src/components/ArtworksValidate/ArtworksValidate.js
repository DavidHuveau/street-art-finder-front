import React from "react";
import "./ArtworksValidate.css";
import ArtworksProposalsList from "../../containers/ArtworksProposalsList/ArtworksProposalsList";
import Navigation from "../../components/Navigation/Navigation";

const ArtworksValidate = props => {
  return (
    <div id="Val-wrapper">
      <header>
        <h1 className="main-color">Street Art Finder</h1>
        <h2>Proposals validation </h2>
      </header>
      <main>
        <ArtworksProposalsList />
      </main>
      <footer>
        <Navigation path="/" caption="Go Home" />
      </footer>
    </div>
  );
};

export default ArtworksValidate;

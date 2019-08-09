import React from "react";
import "./ArtworksExplore.css";
import Navigation from "../Navigation/Navigation";
import ArtworksMap from "../../containers/ArtworksMap/ArtworksMap";
import SearchArtworks from "../../containers/SearchArtworks/SearchArtworks";

const ArtworksExplore = () => {

  const getData = (cityCriteria) => {
    console.log(cityCriteria);
  }

  return (
    <div id="Exp-wrapper">
      <header>
        <h1>Street Art Finder</h1>
        <SearchArtworks search={getData} />
      </header>
      <main>
        <ArtworksMap />
      </main>
      <footer>
        <Navigation />
      </footer>
    </div>
  );
};

export default ArtworksExplore;

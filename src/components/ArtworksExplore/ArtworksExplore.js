import React from "react";
import "./ArtworksExplore.css";
import Navigation from "../Navigation/Navigation";
import ArtworksMap from "../../containers/ArtworksMap/ArtworksMap";
import SearchArtworks from "../../containers/SearchArtworks/SearchArtworks";
import { connect } from "react-redux";
import { fetchArtworks } from "../../actions/ArtworksActionCreators";

const ArtworksExplore = props => {
  const getData = cityCriteria => {
    const { fetchArtworks } = props;
    // console.log(cityCriteria);
    fetchArtworks(cityCriteria);
  };

  return (
    <div>
      <div id="Exp-wrapper">
        <header>
          <h1 className="main-color">Street Art Finder</h1>
          <SearchArtworks onSearch={getData} />
        </header>
        <main>
          <ArtworksMap />
        </main>
        <footer>
          <Navigation />
        </footer>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  fetchArtworks
};

export default connect(
  null,
  mapDispatchToProps
)(ArtworksExplore);

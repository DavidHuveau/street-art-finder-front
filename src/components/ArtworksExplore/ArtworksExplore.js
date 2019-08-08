import React from 'react';
import Navigation from '../Navigation/Navigation';
import ArtworksMap from '../../containers/ArtworksMap/ArtworksMap';
import SearchArtworks from '../../containers/SearchArtworks/SearchArtworks';

import "./ArtworksExplore.css";

const ArtworksExplore = () => {
  return (
    <div id="Exp-wrapper">
      <header>
        <h1>Street Art Finder</h1>
        <SearchArtworks />
      </header>
      <main>
        <ArtworksMap />
      </main>
      <footer>
        <Navigation />
      </footer>
    </div>
  );
}

export default ArtworksExplore;

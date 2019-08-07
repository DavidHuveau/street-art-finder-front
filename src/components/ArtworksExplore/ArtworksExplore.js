import React from 'react';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import ArtworksMap from '../../containers/ArtworksMap/ArtworksMap';
import SearchArtworks from '../../containers/SearchArtworks/SearchArtworks';


const ArtworksExplore = () => {
  return (
    <div>
      <Header />
      <SearchArtworks />
      <ArtworksMap />
      <Navigation />
    </div>
  );
}

export default ArtworksExplore;

import React, { Component } from "react";
import MapWithLeaflet from "../../components/cartography/MapWithLeaflet/MapWithLeaflet";
import ArtworkInfosPane from "../../components/ArtworkInfosPane/ArtworkInfosPane";

class ArtworksMap extends Component {
  constructor(props) {
    super(props);

    this.onRequestClose = this.onRequestClose.bind(this);
    this.showArtworkInfosPane = this.showArtworkInfosPane.bind(this);

    this.state = {
      selectedArtwork: null,
      isArtworkInfosPaneOpen: false
    };
  }

  onRequestClose() {
    this.setState({ isArtworkInfosPaneOpen: false });
  }

  showArtworkInfosPane(selectedArtwork) {
    this.setState({
      selectedArtwork: selectedArtwork,
      isArtworkInfosPaneOpen: true
    });
  }

  render() {
    const { isArtworkInfosPaneOpen, selectedArtwork } = this.state;

    return (
      <div>
        <MapWithLeaflet showArtworkInfosPane={this.showArtworkInfosPane} />
        <ArtworkInfosPane
          isOpen={isArtworkInfosPaneOpen}
          onRequestClose={this.onRequestClose}
          artworkData={selectedArtwork}
        />
      </div>
    );
  }
}

export default ArtworksMap;

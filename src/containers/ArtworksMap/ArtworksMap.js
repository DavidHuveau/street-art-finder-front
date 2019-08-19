import React, { Component } from "react";
import MapWithLeaflet from "../../components/cartography/MapWithLeaflet/MapWithLeaflet";
import ArtworkInfosPane from "../../components/ArtworkInfosPane/ArtworkInfosPane";
import { connect } from "react-redux";

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
    const { artworks, startPosition } = this.props;

    return (
      <div>
        <MapWithLeaflet
          startPosition={startPosition}
          artworks={artworks}
          showArtworkInfosPane={this.showArtworkInfosPane}
        />
        <ArtworkInfosPane
          isOpen={isArtworkInfosPaneOpen}
          onRequestClose={this.onRequestClose}
          selectedArtwork={selectedArtwork}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { artworks } = state;
  return {
    artworks: artworks.items,
    isFetching: artworks.isFetching,
    startPosition: artworks.startPosition
  };
};

export default connect(
  mapStateToProps,
  null
)(ArtworksMap);

import React, { Component } from "react";
import ArtworkSuggestPane from "../../components/ArtworkSuggestPane/ArtworkSuggestPane";

class ArtworkSuggest extends Component {
  constructor(props) {
    super(props);

    this.onRequestClose = this.onRequestClose.bind(this);

    this.state = {
      isArtworkSuggestPaneOpen: true
    };
  }

  onRequestClose() {
    this.setState(
      {
        isArtworkSuggestPaneOpen: false
      },
      () => {this.props.history.push("/");}
    );
  }

  render() {
    const { isArtworkSuggestPaneOpen } = this.state;
    return (
      <ArtworkSuggestPane
        isOpen={isArtworkSuggestPaneOpen}
        onRequestClose={this.onRequestClose}
      />
    );
  }
}

export default ArtworkSuggest;

///=>>>>>>>>>>>> do a HOC

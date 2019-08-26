import React, { Component } from "react";
import ArtworkSuggestForm from "../../components/ArtworkSuggestForm/ArtworkSuggestForm";
import "react-sliding-pane/dist/react-sliding-pane.css";
import SlidingPane from "react-sliding-pane";
import Modal from "react-modal";
import { connect } from "react-redux";
import { createArtwork } from "../../actions/ArtworkActionCreators";

class ArtworkSuggest extends Component {
  constructor(props) {
    super(props);

    ["onRequestClose"].forEach(fn => (this[fn] = this[fn].bind(this)));

    this.state = {
      isArtworkSuggestPaneOpen: true
    };
  }

  componentDidMount() {
    Modal.setAppElement(this.el);
  }

  onRequestClose() {
    this.setState(
      {
        isArtworkSuggestPaneOpen: false
      },
      () => {
        this.props.history.push("/");
      }
    );
  }

  render() {
    const { isArtworkSuggestPaneOpen } = this.state;
    const { createArtwork, isUploading } = this.props;

    return (
      <div ref={ref => (this.el = ref)}>
        <SlidingPane
          // className="width-100-xs width-80-sm"
          isOpen={isArtworkSuggestPaneOpen}
          title={"Back"}
          from="right"
          width="100%"
          onRequestClose={this.onRequestClose}
        >
          <ArtworkSuggestForm
            {...this.props}
            onSubmit={createArtwork}
            isUploading={isUploading}
            onRequestClose={this.onRequestClose}
          />
        </SlidingPane>
      </div>
    );
  }
}

const mapDispatchToProps = {
  createArtwork
};

const mapStateToProps = state => {
  const { artwork } = state;

  return {
    isUploading: artwork.isUploading,
    error: artwork.error
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArtworkSuggest);

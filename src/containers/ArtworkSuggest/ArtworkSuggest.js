import React, { Component } from "react";
import ArtworkSuggestForm from "../../components/ArtworkSuggestForm/ArtworkSuggestForm";
import "react-sliding-pane/dist/react-sliding-pane.css";
import SlidingPane from "react-sliding-pane";
import Modal from "react-modal";
import { connect } from "react-redux";
import { createArtwork, clearArtworkError } from "../../actions/artworkActionCreators";
import { toast } from 'react-toastify';

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

  componentDidUpdate(prevProps) {
    const { error, isUploading } = this.props;
    const { isUploading: prevIsUploading } = prevProps;
    const isEndOfCallApiWithoutError = !isUploading && prevIsUploading && !error;

    if (isEndOfCallApiWithoutError) {
      toast.success("Your suggestion is sent.");
      this.onRequestClose();
    }
    else if(error) {
      toast.error(`Error - ${error}`);
    }
  }

  onRequestClose() {
    const { clearArtworkError } = this.props;
    clearArtworkError();

    this.setState({
        isArtworkSuggestPaneOpen: false
      },
      () => {
        this.props.history.push("/");
      }
    );
  }

  render() {
    const { isArtworkSuggestPaneOpen } = this.state;
    const { createArtwork } = this.props;

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
          />
        </SlidingPane>
      </div>
    );
  }
}

const mapDispatchToProps = {
  createArtwork,
  clearArtworkError
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

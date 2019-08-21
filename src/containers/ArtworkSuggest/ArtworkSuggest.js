import React, { Component } from "react";
import ArtworkSuggestForm from "../../components/ArtworkSuggestForm/ArtworkSuggestForm";
import "react-sliding-pane/dist/react-sliding-pane.css";
import SlidingPane from "react-sliding-pane";
import Modal from "react-modal";

class ArtworkSuggest extends Component {
  constructor(props) {
    super(props);

    this.onRequestClose = this.onRequestClose.bind(this);

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
          <ArtworkSuggestForm {...this.props} />
        </SlidingPane>
      </div>
    );
  }
}

export default ArtworkSuggest;

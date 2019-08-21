import React, { Component } from "react";
import "./ArtworkSuggestPane.css";
import "react-sliding-pane/dist/react-sliding-pane.css";
import SlidingPane from "react-sliding-pane";
import Modal from "react-modal";

class ArtworkSuggestPane extends Component {
  componentDidMount() {
    Modal.setAppElement(this.el);
  }

  render() {
    const { isOpen, onRequestClose } = this.props;

    return (
      <div ref={ref => (this.el = ref)}>
        <SlidingPane
          // className="width-100-xs width-80-sm"
          isOpen={isOpen}
          title={"Back"}
          from="right"
          width="100%"
          onRequestClose={onRequestClose}
        >
          <div className="box">
            <h2>bla</h2>
            <p>bla</p>
          </div>
        </SlidingPane>
      </div>
    );
  }
}

export default ArtworkSuggestPane;

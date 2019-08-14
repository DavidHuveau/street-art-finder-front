import React, { Component } from "react";
import "./ArtworkInfosPane.css";
import "react-sliding-pane/dist/react-sliding-pane.css";
import SlidingPane from "react-sliding-pane";
import Modal from "react-modal";

class ArtworkInfosPane extends Component {

  componentDidMount() {
    Modal.setAppElement(this.el);
  }

  render() {
    const {isOpen, onRequestClose, artworkData} = this.props;

    return (
      artworkData && <div ref={ref => (this.el = ref)}>
        <SlidingPane
          // className="width-100-xs width-80-sm"
          isOpen={isOpen}
          title={"title"}
          subtitle={"subtitle"}
          from="right"
          width="100%"
          onRequestClose={onRequestClose}
        >
        <b>{artworkData._id}</b>
        {/* <div>{`[${artworkData.position.coordinates[0]},${artworkData.position.coordinates[1]}]`}</div> */}
        <div>{artworkData.photoFileName}</div>
        </SlidingPane>
      </div>
    );
  }
}

export default ArtworkInfosPane;

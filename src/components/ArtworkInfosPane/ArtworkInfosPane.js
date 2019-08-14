import React, { Component } from "react";
import SlidingPane from "react-sliding-pane";

class ArtworkInfosPane extends Component {
  render() {
    const { isOpen, onClose } = this.props;
debugger
    return (
      <SlidingPane
        isOpen={isOpen}
        title={"title"}
        subtitle={"subtitle"}
        from="right"
        width="100%"
        onRequestClose={onClose}
        // className="width-100-xs width-80-sm"
      >
        <div>fields</div>
      </SlidingPane>
    );
  }
}

export default ArtworkInfosPane;

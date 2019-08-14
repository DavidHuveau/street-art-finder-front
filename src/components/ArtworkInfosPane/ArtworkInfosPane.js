import React, { Component } from "react";
import "./ArtworkInfosPane.css";
import "react-sliding-pane/dist/react-sliding-pane.css";
import SlidingPane from "react-sliding-pane";
import Modal from "react-modal";

class ArtworkInfosPane extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPaneOpen: false
    };
  }

  componentDidMount() {
    Modal.setAppElement(this.el);
  }

  render() {
    return (
      <div ref={ref => (this.el = ref)}>
        <button onClick={() => this.setState({ isPaneOpen: true })}>
          Click me to open right pane!
        </button>
        <SlidingPane
          // className="width-100-xs width-80-sm"
          isOpen={this.state.isPaneOpen}
          title={"title"}
          subtitle={"subtitle"}
          from="right"
          width="100%"
          onRequestClose={() => {
            this.setState({ isPaneOpen: false });
          }}
        >
          <div>And I am pane content. BTW, what rocks?</div>
          <br />
        </SlidingPane>
      </div>
    );
  }
}

export default ArtworkInfosPane;

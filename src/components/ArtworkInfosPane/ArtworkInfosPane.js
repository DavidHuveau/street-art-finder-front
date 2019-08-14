import React, { Component } from "react";
import "./ArtworkInfosPane.css";
import "react-sliding-pane/dist/react-sliding-pane.css";
import SlidingPane from "react-sliding-pane";
import Modal from "react-modal";
import moment from "moment";

class ArtworkInfosPane extends Component {
  componentDidMount() {
    Modal.setAppElement(this.el);
  }

  render() {
    const { isOpen, onRequestClose, artworkData } = this.props;
    if (!artworkData) return null;

    const {
      userName,
      adressStreet,
      zipCode,
      city,
      country,
      createdAt,
      description
    } = artworkData;

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
          {/* <div id="Infos-pic-header"> */}
          <div
            id="Infos-pic"
            style={{
              backgroundImage: "url(https://placem.at/places)"
            }}
          />
          <div className="box">
            <p>{`Created ${createdAt}`}</p>
            <div id="Infos-adress">{`${adressStreet}, ${zipCode}, ${city}`}</div>
            <div>{`${country.name}`}</div>
          </div>
          <div className="box">
            <p>
              Suggested by<span> {userName}</span>
            </p>
            <p>{description}</p>
          </div>
        </SlidingPane>
      </div>
    );
  }
}

export default ArtworkInfosPane;

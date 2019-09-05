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

  renderDateInfo(date) {
    moment.locale();
    const displayDate = moment(date).format("LL");
    return <>{`Created ${displayDate}`}</>;
  }

  render() {
    const { isOpen, onRequestClose, selectedArtwork } = this.props;
    if (!selectedArtwork) return null;

    const {
      userName,
      adressStreet,
      zipCode,
      city,
      country,
      createdAt,
      description,
      photoFileName
      // isActivated
    } = selectedArtwork;

    // const status = isActivated ? "active" : "inactive";

    return (
      <div ref={ref => (this.el = ref)}>
        <SlidingPane
          isOpen={isOpen}
          title={"Back"}
          from="right"
          width="320px"
          onRequestClose={onRequestClose}
        >
          {/* <div id="Infos-pic-header"> */}
          <div
            id="Infos-pic"
            style={{
              backgroundImage: `url(http://localhost:8080/api/v1/public/artworks/${photoFileName})`
            }}
          />
          <div className="Infos-box">
            {this.renderDateInfo(createdAt)}
            <div id="Infos-address" className="main-color">
              {`${adressStreet}, ${zipCode}, ${city}`}
              {/* {`${adressStreet}, ${zipCode}, ${city}, ${status}`} */}
            </div>
            <>{country.name}</>
          </div>
          <div className="Infos-box">
            <h2>
              Suggested by<span className="main-color"> {userName}</span>
            </h2>
            <p>{description}</p>
          </div>
        </SlidingPane>
      </div>
    );
  }
}

export default ArtworkInfosPane;

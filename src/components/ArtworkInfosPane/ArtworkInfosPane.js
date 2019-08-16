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
      description
      // isActivated
    } = selectedArtwork;

    // const status = isActivated ? "active" : "inactive";

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
            {this.renderDateInfo(createdAt)}
            <div id="Infos-adress" className="main-color">
              {`${adressStreet}, ${zipCode}, ${city}`}
              {/* {`${adressStreet}, ${zipCode}, ${city}, ${status}`} */}
            </div>
            <>{`${country.name}`}</>
          </div>
          <div className="box">
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

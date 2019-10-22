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
    return <p>{`Created ${displayDate}`}</p>;
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
    const urlPicture = `http://localhost:8080/api/v1/public/artworks/${photoFileName}`;
    const addressInLine = `${adressStreet}, ${zipCode}, ${city}`;

    return (
      <div ref={ref => (this.el = ref)}>
        <SlidingPane
          isOpen={isOpen}
          title={"Back"}
          from="right"
          width="320px"
          onRequestClose={onRequestClose}
        >
          <figure style={{ position: "relative" }}>
            <div
              id="Infos-pic"
              style={{
                backgroundImage: `url(${urlPicture})`
              }}
            />
            <div className="Action-button-zoom">
              <a className="btn btn-link" href={urlPicture} data-fancybox="gallery" data-type="image" data-caption={addressInLine}>
                <i class="fa fa-search-plus"></i>
              </a>
            </div>
          </figure>
          <div className="Infos-box">
            {this.renderDateInfo(createdAt)}
            <div id="Infos-address" className="main-color">
              <p>{addressInLine}</p>
              {/* {`${adressStreet}, ${zipCode}, ${city}, ${status}`} */}
            </div>
            <p>{country.name}</p>
            {/* {country.name} */}
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

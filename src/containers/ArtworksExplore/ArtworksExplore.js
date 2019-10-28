import React from "react";
import "./ArtworksExplore.css";
import Navigation from "../../components/Navigation/Navigation";
import ArtworksMap from "../ArtworksMap/ArtworksMap";
import SearchArtworks from "../../components/SearchArtworks/SearchArtworks";
import { connect } from "react-redux";
import { fetchArtworks } from "../../actions/artworksActionCreators";
import { Helmet } from "react-helmet";
import { Container, Row, Col } from "react-bootstrap";

const ArtworksExplore = props => {
  const getData = cityCriteria => {
    const { fetchArtworks } = props;
    // console.log(cityCriteria);
    fetchArtworks(cityCriteria);
  };

  return (
    <div id="Exp-wrapper">
      <Helmet>
        <title>Street Art Finder</title>
        <meta
          name="description"
          content="Interactive and participative online map to promote and list the works of street artists in the world"
        />
      </Helmet>
      <header>
        <Container fluid="true">
          <Row>
          <Col sm={12} md={6} xl={8}>
            <h1 className="main-color">Street Art Finder</h1>
          </Col>
          <Col sm={12} md={6} xl={4}>
            <SearchArtworks onSearch={getData} />
          </Col>
          </Row>
        </Container>
      </header>
      <main>
        <ArtworksMap />
      </main>
      <footer>
        <Navigation path="/suggest" caption="Suggest" />
      </footer>
    </div>
  );
};

const mapDispatchToProps = {
  fetchArtworks
};

export default connect(
  null,
  mapDispatchToProps
)(ArtworksExplore);

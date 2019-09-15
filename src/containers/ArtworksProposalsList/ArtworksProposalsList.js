import React, { Component } from "react";
import "./ArtworksProposalsList.css";
import { Container, Row, Col } from "react-bootstrap";
import ArtworkProposalCard from "../../components/ArtworkProposalCard/ArtworkProposalCard";
import { connect } from "react-redux";
import {
  fetchProposals,
  emptyProposals
} from "../../actions/artworksActionCreators";
import {
  publishProposal,
  noPublishProposal
} from "../../actions/artworkActionCreators";

class ArtworksProposalsList extends Component {
  componentDidMount() {
    const { fetchProposals, token } = this.props;
    fetchProposals(token);
  }

  componentDidUpdate() {}

  componentWillUnmount() {
    const { emptyProposals } = this.props;
    emptyProposals();
  }

  render() {
    const { artworks, publishProposal, noPublishProposal, token } = this.props;

    return (
      <div className="proposals-list-container">
        <small className="text-muted">
          {artworks.length || 0} proposal(s) to valide
        </small>
        <Container fluid="true">
          <Row>
            {artworks.map((artwork, index) => (
              <>
                <Col xs={12} sm={6} md={4} xl={3} className="proposals-list-item">
                  <ArtworkProposalCard
                    key={index}
                    artwork={artwork}
                    publishProposal={id => publishProposal(id, token)}
                    noPublishProposal={id => noPublishProposal(id, token)}
                  />
                </Col>
                {/* <Col xs={12} sm={6} md={4} xl={3} className="proposals-list-item">
                  <ArtworkProposalCard
                    key={index}
                    artwork={artwork}
                    publishProposal={id => publishProposal(id, token)}
                    noPublishProposal={id => noPublishProposal(id, token)}
                  />
                </Col> */}
              </>
            ))}
          </Row>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { artworks, auth } = state;

  return {
    artworks: artworks.items,
    token: auth.token
  };
};

const mapDispatchToProps = {
  fetchProposals,
  emptyProposals,
  publishProposal,
  noPublishProposal
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArtworksProposalsList);

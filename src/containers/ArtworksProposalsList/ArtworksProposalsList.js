import React, { Component } from "react";
import "./ArtworksProposalsList.css";
import { CardDeck } from "react-bootstrap";
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
        <small className="text-muted ml-2">
          {artworks.length || 0} proposal(s) to valide
        </small>
        <CardDeck>
          {artworks.map((artwork, index) => (
            <ArtworkProposalCard
              key={index}
              artwork={artwork}
              publishProposal={id => publishProposal(id, token)}
              noPublishProposal={id => noPublishProposal(id, token)}
            />
          ))}

          {/* <ArtworkProposalCard />
          <ArtworkProposalCard /> */}
          {/* <ArtworkProposalCard />
        <ArtworkProposalCard /> */}
        </CardDeck>
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

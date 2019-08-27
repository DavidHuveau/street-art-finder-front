import React, { Component } from "react";
import "./ArtworksProposalsList.css";
import { CardDeck } from "react-bootstrap";
import ArtworkProposalCard from "../../components/ArtworkProposalCard/ArtworkProposalCard";
import { connect } from "react-redux";
import {
  fetchProposals,
  emptyProposals
} from "../../actions/ArtworksActionCreators";

class ArtworksProposalsList extends Component {
  componentDidMount() {
    const { fetchProposals } = this.props;
    fetchProposals();
  }

  componentDidUpdate() {}

  componentWillUnmount() {
    const { emptyProposals } = this.props;
    emptyProposals();
  }

  render() {
    const { artworks } = this.props;

    // debugger;
    return (
      <div className="proposals-list-container">
        <small className="text-muted ml-2">
          {artworks.length || 0} proposal(s) to valide
        </small>
        <CardDeck>
          {artworks.map((artwork, index) => (
            <ArtworkProposalCard key={index} artwork={artwork} />
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
  const { artworks } = state;
  return {
    artworks: artworks.items,
    isFetching: artworks.isFetching
  };
};

const mapDispatchToProps = {
  fetchProposals,
  emptyProposals
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArtworksProposalsList);

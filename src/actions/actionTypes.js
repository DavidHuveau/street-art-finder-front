import keyMirror from "keymirror";

export default keyMirror({
  // fetch artworks
  RECEIVE_ARTWORKS_REQUEST: null,
  RECEIVE_ARTWORKS_SUCCESS: null,
  RECEIVE_ARTWORKS_FAILURE: null,

  // create artwork
  CREATE_ARTWORK_REQUEST: null,
  CREATE_ARTWORK_SUCCESS: null,
  CREATE_ARTWORK_FAILURE: null,
  
  CLEAR_ARTWORK_ERROR: null,

  // fetch proposals
  RECEIVE_PROPOSALS_REQUEST: null,
  RECEIVE_PROPOSALS_SUCCESS: null,
  RECEIVE_PROPOSALS_FAILURE: null,

  // empty proposals
  EMPTY_PROPOSALS: null,

  // publish a proposal
  PUBLISH_PROPOSAL_REQUEST: null,
  PUBLISH_PROPOSAL_SUCCESS: null,
  PUBLISH_PROPOSAL_FAILURE: null,

  // no publish a proposal
  NO_PUBLISH_PROPOSAL_REQUEST: null,
  NO_PUBLISH_PROPOSAL_SUCCESS: null,
  NO_PUBLISH_PROPOSAL_FAILURE: null,

  // get token
  CREATE_SESSION_REQUEST: null,
  CREATE_SESSION_SUCCESS: null,
  CREATE_SESSION_FAILURE: null
});

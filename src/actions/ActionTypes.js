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

  // fetch proposals
  RECEIVE_PROPOSALS_REQUEST: null,
  RECEIVE_PROPOSALS_SUCCESS: null,
  RECEIVE_PROPOSALS_FAILURE: null,

  // empty proposals
  EMPTY_PROPOSALS: null,
});

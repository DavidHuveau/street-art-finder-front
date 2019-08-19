import ActionTypes from "../actions/ActionTypes";

const initialState = {
  isFetching: false,
  startPosition: [],
  items: [],
  error: null
};

const artworks = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.RECEIVE_ARTWORKS_REQUEST:
      return {
        ...state,
        isFetching: true,
        items: [],
        startPosition: [],
        error: null
      };
    case ActionTypes.RECEIVE_ARTWORKS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        items: action.payload.artworks,
        startPosition: action.payload.startPosition,
        error: null
      };
    case ActionTypes.RECEIVE_ARTWORKS_FAILURE:
      return {
        ...state,
        isFetching: false,
        items: [],
        startPosition: [],
        error: action.error
      };
    default:
      return state;
  }
};

export default artworks;

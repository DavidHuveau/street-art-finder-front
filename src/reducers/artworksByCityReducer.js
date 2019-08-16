import ActionTypes from "../actions/ActionTypes";

const initialState = {
  isFetching: false,
  items: [],
  error: null
};

const artworksByCity = (state = initialState, action) => {
  debugger
  switch (action.type) {
    case ActionTypes.RECEIVE_ARTWORKS_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: null
      };
    case ActionTypes.RECEIVE_ARTWORKS_SUCCESS:
      debugger;
      return {
        ...state,
        isFetching: false,
        items: action.payload.data,
        lastUpdated: action.receivedAt,
        error: null
      };
    case ActionTypes.RECEIVE_ARTWORKS_FAILURE:
      return {
        ...state,
        isFetching: false,
        items: [],
        error: action.error
      };
    default:
      return state;
  }
};

export default artworksByCity;

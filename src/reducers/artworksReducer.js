import ActionTypes from "../actions/ActionTypes";

const initialState = {
  isFetching: false,
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
        error: null
      };
    case ActionTypes.RECEIVE_ARTWORKS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        items: action.payload,
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

export default artworks;

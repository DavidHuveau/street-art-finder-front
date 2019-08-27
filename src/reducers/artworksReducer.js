import ActionTypes from "../actions/ActionTypes";

const initialState = {
  isFetching: false,
  isUploading: false,
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
    // case ActionTypes.CREATE_ARTWORK_REQUEST:
    //   return {
    //     ...state,
    //     isUploading: true,
    //     error: null
    //   };
    // case ActionTypes.CREATE_ARTWORK_SUCCESS:
    //   return {
    //     ...state,
    //     isUploading: false,
    //     error: null
    //   };
    // case ActionTypes.CREATE_ARTWORK_FAILURE:
    //   return {
    //     ...state,
    //     isUploading: false,
    //     error: action.error
    //   };
    case ActionTypes.RECEIVE_PROPOSALS_REQUEST:
      return {
        ...state,
        isFetching: true,
        items: [],
        startPosition: [],
        error: null
      };
    case ActionTypes.RECEIVE_PROPOSALS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        items: action.payload.artworks,
        startPosition: [],
        error: null
      };
    case ActionTypes.RECEIVE_PROPOSALS_FAILURE:
      return {
        ...state,
        isFetching: false,
        items: [],
        startPosition: [],
        error: action.error
      };
    case ActionTypes.EMPTY_PROPOSALS:
      return {
        ...state,
        ...initialState
      };
    default:
      return state;
  }
};

export default artworks;

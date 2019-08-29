import ActionTypes from "../actions/actionTypes";

const initialState = {
  isUploading: false,
  artwork: {},
  error: null
};

const artwork = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.CREATE_ARTWORK_REQUEST:
      return {
        ...state,
        isUploading: true,
        artwork: {},
        error: null
      };
    case ActionTypes.CREATE_ARTWORK_SUCCESS:
      return {
        ...state,
        isUploading: false,
        artwork: action.payload.artworks[0],
        error: null
      };
    case ActionTypes.CREATE_ARTWORK_FAILURE:
      return {
        ...state,
        isUploading: false,
        artwork: {},
        error: action.error
      };
    default:
      return state;
  }
};

export default artwork;

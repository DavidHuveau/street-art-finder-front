import ActionTypes from "../actions/actionTypes";

const initialState = { token: null };

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.CREATE_SESSION_SUCCESS:
      return { ...state, token: action.payload.token };
    default:
      return state;
  }
};

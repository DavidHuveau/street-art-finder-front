import ActionTypes from "../actions/ActionTypes";
import { RSAA } from "redux-api-middleware";

export const fetchArtworks = city => {
  const {
    RECEIVE_ARTWORKS_REQUEST,
    RECEIVE_ARTWORKS_SUCCESS,
    RECEIVE_ARTWORKS_FAILURE
  } = ActionTypes;
debugger
  return {
    [RSAA]: {
      endpoint: `http://localhost:8080/api/v1/artworks/searchByCity/?city=${city}&countryCode=FR`,
      method: "GET",
      types: [
        RECEIVE_ARTWORKS_REQUEST,
        RECEIVE_ARTWORKS_SUCCESS,
        RECEIVE_ARTWORKS_FAILURE
      ]
    }
  };
};

import ActionTypes from "../actions/ActionTypes";
import { RSAA } from "redux-api-middleware";

export const fetchArtworks = city => {
  const {
    RECEIVE_ARTWORKS_REQUEST,
    RECEIVE_ARTWORKS_SUCCESS,
    RECEIVE_ARTWORKS_FAILURE
  } = ActionTypes;

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

export const fetchProposals = () => {
  const {
    RECEIVE_PROPOSALS_REQUEST,
    RECEIVE_PROPOSALS_SUCCESS,
    RECEIVE_PROPOSALS_FAILURE
  } = ActionTypes;

  return {
    [RSAA]: {
      // endpoint: `http://localhost:8080/api/v1/artworks/`,
      endpoint: `http://localhost:8080/api/v1/proposals/`,
      method: "GET",
      types: [
        RECEIVE_PROPOSALS_REQUEST,
        RECEIVE_PROPOSALS_SUCCESS,
        RECEIVE_PROPOSALS_FAILURE
      ]
    }
  };
};

export const emptyProposals = () => {
  const { EMPTY_PROPOSALS } = ActionTypes;

  return {
    type: EMPTY_PROPOSALS
  };
};

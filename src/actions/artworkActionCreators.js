import ActionTypes from "./actionTypes";
import { RSAA } from "redux-api-middleware";

export const createArtwork = createData => {
  const {
    CREATE_ARTWORK_REQUEST,
    CREATE_ARTWORK_SUCCESS,
    CREATE_ARTWORK_FAILURE
  } = ActionTypes;

  return {
    [RSAA]: {
      endpoint: `http://localhost:8080/api/v1/artworks/`,
      method: "POST",
      body: createData,
      types: [
        CREATE_ARTWORK_REQUEST,
        CREATE_ARTWORK_SUCCESS,
        CREATE_ARTWORK_FAILURE
      ]
    }
  };
};

export const publishProposal = id => {
  const {
    PUBLISH_PROPOSAL_REQUEST,
    PUBLISH_PROPOSAL_SUCCESS,
    PUBLISH_PROPOSAL_FAILURE
  } = ActionTypes;

  return {
    [RSAA]: {
      endpoint: `http://localhost:8080/api/v1/proposals/publish/${id}`,
      method: "PUT",
      types: [
        PUBLISH_PROPOSAL_REQUEST,
        {
          type: PUBLISH_PROPOSAL_SUCCESS,
          payload: { id: id }
        },
        PUBLISH_PROPOSAL_FAILURE
      ]
    }
  };
};

export const noPublishProposal = id => {
  const {
    NO_PUBLISH_PROPOSAL_REQUEST,
    NO_PUBLISH_PROPOSAL_SUCCESS,
    NO_PUBLISH_PROPOSAL_FAILURE
  } = ActionTypes;

  return {
    [RSAA]: {
      endpoint: `http://localhost:8080/api/v1/proposals/noPublish/${id}`,
      method: "PUT",
      types: [
        NO_PUBLISH_PROPOSAL_REQUEST,
        {
          type: NO_PUBLISH_PROPOSAL_SUCCESS,
          payload: { id: id }
        },
        NO_PUBLISH_PROPOSAL_FAILURE
      ]
    }
  };
};

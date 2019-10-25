import ActionTypes from "./actionTypes";
import { RSAA } from "redux-api-middleware";

export const createArtwork = artwork => {
  const {
    CREATE_ARTWORK_REQUEST,
    CREATE_ARTWORK_SUCCESS,
    CREATE_ARTWORK_FAILURE
  } = ActionTypes;

  const {
    userName,
    adressStreet,
    zipCode,
    city,
    description,
    country,
    countryCode,
    selectedFile,
    artistName
  } = artwork;

  const formData = new FormData();
  formData.append("userName", userName);
  formData.append("adressStreet", adressStreet);
  formData.append("zipCode", zipCode);
  formData.append("city", city);
  formData.append("description", description);
  formData.append("country", country);
  formData.append("countryCode", countryCode);
  formData.append("artistName", artistName);
  formData.append("myFile", selectedFile);

  return {
    [RSAA]: {
      endpoint: `http://localhost:8080/api/v1/artworks/`,
      method: "POST",
      body: formData,
      types: [
        CREATE_ARTWORK_REQUEST,
        CREATE_ARTWORK_SUCCESS,
        CREATE_ARTWORK_FAILURE
      ]
    }
  };
};

export const clearArtworkError = () => {
  const { CLEAR_ARTWORK_ERROR } = ActionTypes;
  return { type : CLEAR_ARTWORK_ERROR };
}

export const publishProposal = (id, token) => {
  const {
    PUBLISH_PROPOSAL_REQUEST,
    PUBLISH_PROPOSAL_SUCCESS,
    PUBLISH_PROPOSAL_FAILURE
  } = ActionTypes;

  return {
    [RSAA]: {
      endpoint: `http://localhost:8080/api/v1/proposals/publish/${id}`,
      method: "PUT",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Bearer ${token}`
      },
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

export const noPublishProposal = (id, token) => {
  const {
    NO_PUBLISH_PROPOSAL_REQUEST,
    NO_PUBLISH_PROPOSAL_SUCCESS,
    NO_PUBLISH_PROPOSAL_FAILURE
  } = ActionTypes;

  return {
    [RSAA]: {
      endpoint: `http://localhost:8080/api/v1/proposals/noPublish/${id}`,
      method: "PUT",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Bearer ${token}`
      },
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

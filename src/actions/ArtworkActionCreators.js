import ActionTypes from "../actions/ActionTypes";
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

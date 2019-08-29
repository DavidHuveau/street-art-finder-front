import ActionTypes from "./actionTypes";
import { RSAA } from "redux-api-middleware";

export const createSession = signInData => {
  const {
    CREATE_SESSION_REQUEST,
    CREATE_SESSION_SUCCESS,
    CREATE_SESSION_FAILURE
  } = ActionTypes;

  return {
    [RSAA]: {
      endpoint: `http://localhost:8080/api/v1/auth/signin/`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(signInData),
      types: [
        CREATE_SESSION_REQUEST,
        CREATE_SESSION_SUCCESS,
        CREATE_SESSION_FAILURE
      ]
    }
  };
};

import ActionTypes from "./actionTypes";
import { RSAA } from "redux-api-middleware";

export const createSession = signInData => {
  const {
    CREATE_SESSION_REQUEST,
    CREATE_SESSION_SUCCESS,
    CREATE_SESSION_FAILURE
  } = ActionTypes;
  const loginInfo = `login=${signInData.login}&password=${signInData.password}`;

  return {
    [RSAA]: {
      endpoint: `/api/v1/auth/signin/`,
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: loginInfo,
      types: [
        CREATE_SESSION_REQUEST,
        CREATE_SESSION_SUCCESS,
        CREATE_SESSION_FAILURE
      ]
    }
  };
};

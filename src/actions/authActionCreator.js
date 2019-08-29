import ActionTypes from "./actionTypes";
import { RSAA } from "redux-api-middleware";

export const createSession = sigInData => {
  const {
    CREATE_SESSION_REQUEST,
    CREATE_SESSION_SUCCESS,
    CREATE_SESSION_FAILURE
  } = ActionTypes;
  debugger;
  return {
    [RSAA]: {
      endpoint: `http://localhost:8080/api/v1/auth/signin/`,
      method: "POST",
      // body: sigInData,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        login: sigInData.login,
        password: sigInData.password
      }),
      types: [
        CREATE_SESSION_REQUEST,
        CREATE_SESSION_SUCCESS,
        CREATE_SESSION_FAILURE
      ]
    }
  };
};

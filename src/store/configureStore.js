import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { apiMiddleware } from "redux-api-middleware";
import rootReducer from "../reducers";

const middlewares = [thunkMiddleware, apiMiddleware];

if (process.env.NODE_ENV || "development" !== "production") {
  const { createLogger } = require(`redux-logger`);
  middlewares.push(createLogger());
}

export default preloadedState => {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(...middlewares)
  );
};

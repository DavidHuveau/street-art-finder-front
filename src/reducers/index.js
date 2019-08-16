import { combineReducers } from "redux";
import artworksByCity from "./artworksByCityReducer";

const rootReducer = combineReducers({
  artworksByCity
});

export default rootReducer;

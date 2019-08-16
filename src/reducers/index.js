import { combineReducers } from "redux";
import artworks from "./artworksReducer";

const rootReducer = combineReducers({
  artworks
});

export default rootReducer;

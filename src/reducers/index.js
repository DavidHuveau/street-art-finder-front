import { combineReducers } from "redux";
import artworks from "./artworksReducer";
import artwork from "./artworkReducer";
import auth from "./authReducer";

const rootReducer = combineReducers({
  artworks,
  artwork,
  auth
});

export default rootReducer;

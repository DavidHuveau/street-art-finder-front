import { combineReducers } from "redux";
import artworks from "./artworksReducer";
import artwork from "./artworkReducer";

const rootReducer = combineReducers({
  artworks,
  artwork
});

export default rootReducer;

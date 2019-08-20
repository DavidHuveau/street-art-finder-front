import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import { BrowserRouter, Route } from "react-router-dom";
import ArtworksExplore from "./containers/ArtworksExplore/ArtworksExplore";
import ArtworkSuggest from "./containers/ArtworkSuggest/ArtworkSuggest";

const store = configureStore();

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Route path="/" exact component={ArtworksExplore} />
          <Route path="/suggest/" component={ArtworkSuggest} />
        </BrowserRouter>
      </div>
    </Provider>
  );
};

export default App;

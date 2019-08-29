import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import { Route, Switch } from "react-router-dom";
import ArtworksExplore from "./containers/ArtworksExplore/ArtworksExplore";
import ArtworkSuggest from "./containers/ArtworkSuggest/ArtworkSuggest";
import Page404 from "./components/Page404/Page404";
import ArtworksValidate from "./components/ArtworksValidate/ArtworksValidate";
import ProposalsSignIn from "./containers/ProposalsSignIn/ProposalsSignIn";

const store = configureStore();

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Switch>
          <Route path="/" exact component={ArtworksExplore} />
          <Route path="/suggest" component={ArtworkSuggest} />
          <Route path="/validate" component={ArtworksValidate} />
          <Route path="/signin" component={ProposalsSignIn} />
          <Route component={Page404} />
        </Switch>
      </div>
    </Provider>
  );
};

export default App;

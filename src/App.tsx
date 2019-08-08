import React from "react";
import "./App.css";
import ArtworksExplore from "./components/ArtworksExplore/ArtworksExplore";
import ArtworkSuggest from "./components/ArtworkSuggest/ArtworkSuggest";

// import { Button, Alert } from "react-bootstrap";

const App: React.FC = () => {
  return (
    <div className="App">
      {/* <header className="App-header">
        <Button variant="primary">test</Button>
        <Alert variant="primary">This is an alert!</Alert>
      </header> */}

      <ArtworksExplore />
      {/* <ArtworkSuggest /> */}
    </div>
  );
};

export default App;

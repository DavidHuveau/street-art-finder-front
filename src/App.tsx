import React from "react";
import "./App.css";

import { Button, Alert } from "react-bootstrap";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Button variant="primary">test</Button>
        <Alert variant="primary">This is an alert!</Alert>
      </header>
    </div>
  );
};

export default App;

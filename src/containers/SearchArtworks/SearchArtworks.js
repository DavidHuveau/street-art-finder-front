import React, { Component } from "react";
import "./SearchArtworks.css";
import "../../App.css";
import { InputGroup, Button, FormControl } from "react-bootstrap";

class SearchArtworks extends Component {
  render() {
    // City...
    return (
      <div id="Srch-wrapper" className="left-lg right-lg">
        <InputGroup>
          <InputGroup.Prepend>
            <Button variant="outline-secondary" type="submit">
              Search
            </Button>
          </InputGroup.Prepend>
          <FormControl placeholder="City" aria-describedby="basic-addon1" />
          <InputGroup.Append>
            <Button variant="outline-secondary">X</Button>
          </InputGroup.Append>
        </InputGroup>
      </div>
    );
  }
}

export default SearchArtworks;

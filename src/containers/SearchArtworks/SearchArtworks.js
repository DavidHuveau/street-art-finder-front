import React, { Component } from "react";
import "./SearchArtworks.css";
import "../../App.css";
import { InputGroup, Button, FormControl } from "react-bootstrap";
import PropTypes from "prop-types";

class SearchArtworks extends Component {
  constructor(props) {
    super(props);

    this.onChangeCriteria = this.onChangeCriteria.bind(this);
    this.onClickSearch = this.onClickSearch.bind(this);
    this.onClickClear = this.onClickClear.bind(this);

    this.state = {
      valueCriteria: "" // only City in first time
    };
  }

  onChangeCriteria(e) {
    this.setState({
      valueCriteria: e.target.value
    });
  }

  onClickSearch() {
    const { valueCriteria } = this.state;
    const { search } = this.props;

    // console.log(valueCriteria);
    search(valueCriteria);
  }

  onClickClear() {
    this.setState({
      valueCriteria: ""
    });
  }

  render() {
    const { valueCriteria } = this.state;

    return (
      <div id="Srch-wrapper" className="left-lg right-lg">
        <InputGroup>
          <InputGroup.Prepend>
            <Button
              variant="outline-secondary"
              type="submit"
              onClick={this.onClickSearch}
            >
              Search
            </Button>
          </InputGroup.Prepend>
          <FormControl
            type="text"
            placeholder="City"
            aria-describedby="basic-addon1"
            value={valueCriteria}
            onChange={this.onChangeCriteria}
          />
          <InputGroup.Append>
            <Button variant="outline-secondary" onClick={this.onClickClear}>
              X
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </div>
    );
  }
}

export default SearchArtworks;

SearchArtworks.propTypes = {
  search: PropTypes.func.isRequired
};

SearchArtworks.defaultProps = {
  search: () => {}
};

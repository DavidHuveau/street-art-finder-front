import React, { Component } from "react";
import "./SearchArtworks.css";
import { InputGroup, Button, FormControl } from "react-bootstrap";
import PropTypes from "prop-types";

class SearchArtworks extends Component {
  constructor(props) {
    super(props);

    ["onChangeCriteria", "onClickSearch", "onClickClear"].forEach(
      fn => (this[fn] = this[fn].bind(this))
    );

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
    const { onSearch } = this.props;

    onSearch(valueCriteria);
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
              id="submit-button"
            >
              Search
            </Button>
          </InputGroup.Prepend>
          <FormControl
            type="text"
            placeholder="City"
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
  onSearch: PropTypes.func.isRequired
};

SearchArtworks.defaultProps = {
  onSearch: () => {}
};

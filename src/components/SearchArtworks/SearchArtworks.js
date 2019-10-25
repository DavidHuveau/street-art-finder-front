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

  onChangeCriteria({target}) {
    const { value } = target;
    this.setState({
      valueCriteria: value
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
          <FormControl
            type="text"
            placeholder="City"
            value={valueCriteria}
            onChange={this.onChangeCriteria}
          />
          { valueCriteria.length > 0 && <InputGroup.Append>
              <Button variant="outline-secondary" onClick={this.onClickClear}>
                <i className="fa fa-eraser"></i>
              </Button>
            </InputGroup.Append>
          }
          <InputGroup.Append>
            <Button
              variant="outline-secondary"
              type="submit"
              onClick={this.onClickSearch}
              id="submit-button"
            >
              <i className="fa fa-search-plus"></i>
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

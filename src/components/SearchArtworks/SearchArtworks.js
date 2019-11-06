import React, { Component } from "react";
import "./SearchArtworks.css";
import { InputGroup, Button, FormControl, Form } from "react-bootstrap";
import PropTypes from "prop-types";

class SearchArtworks extends Component {
  constructor(props) {
    super(props);

    ["onChangeCriteria", "onSubmit", "onClickClear", "onKeyPress"].forEach(
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

  onSubmit(event) {
    event.preventDefault();
    const { valueCriteria } = this.state;
    const { onSearch } = this.props;

    if (valueCriteria) onSearch(valueCriteria);
  }

  onClickClear() {
    this.setState({
      valueCriteria: ""
    });
  }

  onKeyPress(event) {
    if (event.key === 'Enter') {
      event.stopPropagation();
      this.onSubmit(event);
    }
  }

  render() {
    const { valueCriteria } = this.state;

    return (
      <Form id="Srch-wrapper" onSubmit={this.onSubmit}>
        <InputGroup>
          <FormControl
            type="text"
            placeholder="City"
            value={valueCriteria}
            onChange={this.onChangeCriteria}
            onKeyPress={this.onKeyPress}
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
              id="submit-button"
            >
              <i className="fa fa-search"></i>
            </Button>
          </InputGroup.Append>
          <div className="separator">
          </div>
          <a href="https://www.instagram.com/street.art.finder/" target="_blank" style={{ margin:"auto" }}>
            <i className="fab fa-instagram" style={{ fontSize:"17px" }}></i>
          </a>
        </InputGroup>
      </Form>
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

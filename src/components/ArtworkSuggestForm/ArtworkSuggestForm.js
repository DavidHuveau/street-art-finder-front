import React, { Component, Fragment } from "react";
import "./ArtworkSuggestForm.css";
import { Form, Button, Spinner, Card, Container } from "react-bootstrap";

class ArtworkSuggestForm extends Component {
  constructor(props) {
    super(props);

    ["onChangeValue", "onSubmit", "fileChangedHandler"].forEach(
      fn => (this[fn] = this[fn].bind(this))
    );

    this.state = {
      userName: "",
      adressStreet: "",
      zipCode: "",
      city: "",
      description: "",
      country: "5d8919ca6a7d8d996731b976",
      countryCode: "FR",
      selectedFile: "",
      artistName: ""
    };
  }

  componentDidUpdate(prevProps) {
    const { error, isUploading, onRequestClose } = this.props;
    const { isUploading: prevIsUploading } = prevProps;
    const isEndOfCallApiWithoutError = !isUploading && prevIsUploading;

    if (isEndOfCallApiWithoutError && !error) {
      onRequestClose();
    }
  }

  onChangeValue(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  fileChangedHandler(e) {
    this.setState({
      selectedFile: e.target.files[0]
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const { onSubmit } = this.props;
    onSubmit(this.state);
  }

  renderForm() {
    const { userName, adressStreet, zipCode, city, description, artistName } = this.state;

    return (
      <div className="down-lg">
        <Form.Group controlId="formGroupName">
          <Form.Label>Artist name</Form.Label>
          <Form.Control
            type="text"
            value={artistName}
            onChange={this.onChangeValue}
            name="artistName"
            required
          />
        </Form.Group>
        <Form.Group controlId="formGroupAddress">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Street address..."
            value={adressStreet}
            onChange={this.onChangeValue}
            name="adressStreet"
            required
          />
        </Form.Group>
        <Form.Row>
          <Form.Group controlId="formGroupZipCode" id="input-zipcode">
            <Form.Control
              type="text"
              placeholder="Zip code..."
              value={zipCode}
              onChange={this.onChangeValue}
              name="zipCode"
              required
            />
          </Form.Group>
          <Form.Group controlId="formGroupCity">
            <Form.Control
              type="text"
              placeholder="City..."
              value={city}
              onChange={this.onChangeValue}
              name="city"
              required
            />
          </Form.Group>
        </Form.Row>
        <Form.Group controlId="formGroupDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows="3"
            value={description}
            onChange={this.onChangeValue}
            name="description"
            required
          />
        </Form.Group>
        <Form.Group controlId="formGroupName">
          <Form.Label>Photo credits</Form.Label>
          <Form.Control
            type="text"
            placeholder="Name or username..."
            value={userName}
            onChange={this.onChangeValue}
            name="userName"
            required
          />
        </Form.Group>
        <Form.Group controlId="formGroupImage">
          <Form.Label>Image</Form.Label>
          <Form.Control
            type="file"
            accept="image/*"
            onChange={this.fileChangedHandler}
            name="myFile"
            required
          />
        </Form.Group>
      </div>
    );
  }

  renderSubmitButton() {
    const { isUploading } = this.props;

    const contentButton = isUploading ? (
      <Fragment>
        <Spinner as="span" animation="border" size="sm" role="status" key="1" />
        <span key="2">Uploading...</span>
      </Fragment>
    ) : (
      "Suggest"
    );

    return (
      <div className="float-right">
        <Button variant="primary" type="submit" disabled={isUploading}>
          {contentButton}
        </Button>
      </div>
    );
  }

  render() {
    return (
      <Form onSubmit={this.onSubmit}>
        <Container style={{ marginBottom: "70px" }}>
          <Card bsPrefix="Suggest" className="down-lg">
            <Card.Header>
              <strong>Suggest</strong>
            </Card.Header>
            <Card.Body>
              <p>
                Fill in the form below. If appoved, your suggested place will
                appear on this map!
              </p>
              {this.renderForm()}
            </Card.Body>
          </Card>
          {this.renderSubmitButton()}
        </Container>
      </Form>
    );
  }
}

export default ArtworkSuggestForm;

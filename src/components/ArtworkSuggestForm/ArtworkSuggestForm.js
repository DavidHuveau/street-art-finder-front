import React, { Component } from "react";
import "./ArtworkSuggestForm.css";
import { Form, Button } from "react-bootstrap";

class ArtworkSuggestForm extends Component {
  constructor(props) {
    super(props);

    ["onChangeValue", "onSubmit", "fileChangedHandler"].forEach(
      fn => (this[fn] = this[fn].bind(this))
    );

    this.state = {
      userName: "Fred",
      adressStreet: "12 Avenue Brébant",
      zipCode: "51100",
      city: "Reims",
      description: "description",
      country: "5c87d82de78b4e40b133c55b",
      countryCode: "FR",
      selectedFile: ""
    };
    // this.state = {
    //   userName: "",
    //   adressStreet: "",
    //   zipCode: "",
    //   city: "",
    //   description: "",
    //   country: "5c87d82de78b4e40b133c55b",
    //   countryCode: "FR",
    //   selectedFile: ""
    // };
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
    // document.querySelector

    const {
      userName,
      adressStreet,
      zipCode,
      city,
      description,
      country,
      countryCode,
      selectedFile
    } = this.state;

    const formData = new FormData();
    formData.append("userName", userName);
    formData.append("adressStreet", adressStreet);
    formData.append("zipCode", zipCode);
    formData.append("city", city);
    formData.append("description", description);
    formData.append("country", country);
    formData.append("countryCode", countryCode);
    formData.append("myFile", selectedFile);

    const { onSubmit } = this.props;
    onSubmit(formData);
  }

  render() {
    const { userName, adressStreet, zipCode, city, description } = this.state;

    return (
      <div>
        <div className="box">
          <h2 className="main-color">Suggest</h2>
          <p>
            Fill in the form below. If appoved, your suggested place will appear
            on this map!
          </p>
        </div>
        <Form methode="POST" onSubmit={this.onSubmit}>
          <Form.Group controlId="formGroupName" className="box">
            <Form.Label>Name</Form.Label>
            <Form.Text className="text-muted">Your name.</Form.Text>
            <Form.Control
              type="text"
              placeholder="Enter a name..."
              value={userName}
              onChange={this.onChangeValue}
              name="userName"
              required
            />
          </Form.Group>
          <div className="box">
            <Form.Group controlId="formGroupAddress">
              <Form.Label>Address</Form.Label>
              <Form.Text className="text-muted">
                Address of the artwork.
              </Form.Text>
              <Form.Control
                type="text"
                placeholder="Enter a street address..."
                value={adressStreet}
                onChange={this.onChangeValue}
                name="adressStreet"
                required
              />
            </Form.Group>
            <Form.Row>
              <Form.Group controlId="formGroupZipCode">
                <Form.Control
                  type="text"
                  placeholder="Enter a zip code..."
                  value={zipCode}
                  onChange={this.onChangeValue}
                  name="zipCode"
                  required
                />
              </Form.Group>
              <Form.Group controlId="formGroupCity">
                <Form.Control
                  type="text"
                  placeholder="Enter a city..."
                  value={city}
                  onChange={this.onChangeValue}
                  name="city"
                  required
                />
              </Form.Group>
            </Form.Row>
          </div>
          <Form.Group controlId="formGroupDescription" className="box">
            <Form.Label>Description</Form.Label>
            <Form.Text className="text-muted">
              Description of the artwork.
            </Form.Text>
            <Form.Control
              as="textarea"
              rows="3"
              placeholder="Enter a description..."
              value={description}
              onChange={this.onChangeValue}
              name="description"
              required
            />
          </Form.Group>
          <Form.Group controlId="formGroupImage" className="box">
            <Form.Label>Image</Form.Label>
            <Form.Text className="text-muted">Image of the artwork.</Form.Text>
            <input
              type="file"
              accept="image/*"
              onChange={this.fileChangedHandler}
              name="myFile"
              required
            />
          </Form.Group>
          <div className="box">
            <Button variant="primary" type="submit">
              Suggest
            </Button>
          </div>
        </Form>
      </div>
    );
  }
}

export default ArtworkSuggestForm;

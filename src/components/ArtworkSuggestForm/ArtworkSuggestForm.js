import React, { Component } from "react";
import "./ArtworkSuggestForm.css";
import { Form, Button } from "react-bootstrap";

class ArtworkSuggestForm extends Component {
  constructor(props) {
    super(props);

    this.onChangeValue = this.onChangeValue.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      userName: "Lisa",
      adressStreet: "12 Avenue Brébant",
      zipCode: "51100",
      city: "Reims",
      description: "desc",
      country: "5c87d82de78b4e40b133c55b",
      countryCode: "FR",
      myFile: ""
    };
  }

  onChangeValue(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    console.log("submit");
  }

  render() {
    const {
      userName,
      adressStreet,
      zipCode,
      city,
      description,
      myFile
    } = this.state;

    return (
      <div>
        <div className="box">
          <h2 className="main-color">Suggest</h2>
          <p>
            Fill in the form below. If appoved, your suggested place will appear
            on this map!
          </p>
        </div>
        <Form onSubmit={this.onSubmit}>
          <Form.Group controlId="formGroupName" className="box">
            <Form.Label>Name</Form.Label>
            <Form.Text className="text-muted">Your name.</Form.Text>
            <Form.Control
              type="text"
              placeholder="Enter a name..."
              value={userName}
              onChange={this.onChangeValue}
              name="userName"
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
                />
              </Form.Group>
              <Form.Group controlId="formGroupCity">
                <Form.Control
                  type="text"
                  placeholder="Enter a city..."
                  value={city}
                  onChange={this.onChangeValue}
                  name="city"
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
            />
          </Form.Group>
          <Form.Group controlId="formGroupImage" className="box">
            <Form.Label>Image</Form.Label>
            <Form.Text className="text-muted">Image of the artwork.</Form.Text>
            <input
              type="file"
              accept="image/*"
              required=""
              value={myFile}
              onChange={this.onChangeValue}
              name="myFile"
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

{
  /* <form method="post" encType="multipart/form-data" action="/upload">
<input type="file" name="uploadFile" />
<input type="submit" className="btn btn-primary" value="upload" />
</form> */
}

import React, { Component } from "react";
import "./ArtworkSuggestForm.css";
import { Form, Button } from "react-bootstrap";

class ArtworkSuggestForm extends Component {
  render() {
    return (
      <div>
        <div className="box">
          <h2 className="main-color">Suggest</h2>
          <p>
            Fill in the form below. If appoved, your suggested place will appear
            on this map!
          </p>
        </div>
        <Form>
          <div className="box">
            <Form.Group controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Text className="text-muted">Your name.</Form.Text>
              <Form.Control type="text" placeholder="Enter a name..." />
            </Form.Group>
          </div>
          <div className="box">
            <Form.Group controlId="formBasicAddress">
              <Form.Label>Address</Form.Label>
              <Form.Text className="text-muted">
                Address of the artwork.
              </Form.Text>
              <Form.Control
                type="text"
                placeholder="Enter a street address..."
              />
            </Form.Group>

            <Form.Row>
              <Form.Group controlId="formBasicZipCode">
                <Form.Control type="text" placeholder="Enter a zip code..." />
              </Form.Group>
              <Form.Group controlId="formBasicCity">
                <Form.Control type="text" placeholder="Enter a city..." />
              </Form.Group>
            </Form.Row>
          </div>
          <div className="box">
            <Form.Group controlId="ControlTextareaDescription">
              <Form.Label>Description</Form.Label>
              <Form.Text className="text-muted">
                Description of the artwork.
              </Form.Text>
              <Form.Control
                as="textarea"
                rows="3"
                placeholder="Enter a description..."
              />
            </Form.Group>
          </div>
          <div className="box">
            <Form.Group controlId="ControlTextareaDescription">
              <Form.Label>Images</Form.Label>
              <Form.Text className="text-muted">
                Image of the artwork.
              </Form.Text>
              <input required="" multiple="" type="file" name="images[]" />
            </Form.Group>
          </div>
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

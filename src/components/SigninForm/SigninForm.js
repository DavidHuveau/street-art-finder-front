import React, { Component } from "react";
import "./SigninForm.css";
import { Form, Button, Card, Container } from "react-bootstrap";

class SignInForm extends Component {
  constructor() {
    super();

    ["onChangeValue", "onSubmit", "renderForm"].forEach(
      fn => (this[fn] = this[fn].bind(this))
    );

    // this.state = {
    //   login: "toto",
    //   password: "1234"
    // };
    this.state = {
      login: "",
      password: ""
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

    const { login, password } = this.state;
    const { onSubmit } = this.props;

    onSubmit({ login: login, password: password });
  }

  renderForm() {
    const { login, password } = this.state;

    return (
      <Form
      methode="POST"
      onSubmit={this.onSubmit}
      >
        <Form.Group controlId="formGroupLogin">
          <Form.Label>Login</Form.Label>
          <Form.Text className="text-muted">Your login.</Form.Text>
          <Form.Control
            type="text"
            placeholder="Enter a login..."
            value={login}
            onChange={this.onChangeValue}
            name="login"
            required
          />
        </Form.Group>
        <Form.Group controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Text className="text-muted">Your password.</Form.Text>
          <Form.Control
            type="password"
            placeholder="Enter a password..."
            value={password}
            onChange={this.onChangeValue}
            name="password"
            required
          />
        </Form.Group>
      </Form>
    );
  }

  renderSubmitButton() {
    return (
      <div className="float-right">
        <Button type="submit" color="primary">
          Login
        </Button>
      </div>
    );
  }

  render() {
    return (
      <Container style={{ marginBottom: "70px"}}>
        <Card bsPrefix="Signin" className="down-lg">
          <Card.Header>
            <strong>Sign In</strong>
          </Card.Header>
          <Card.Body>
            {this.renderForm()}
          </Card.Body>
        </Card>
        {this.renderSubmitButton()}
      </Container>
    );
  }
}

export default SignInForm;

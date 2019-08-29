import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

class SignIn extends Component {
  constructor() {
    super();

    ["onChangeValue", "onSubmit"].forEach(
      fn => (this[fn] = this[fn].bind(this))
    );

    this.state = {
      login: "toto",
      password: "1234"
    };
    // this.state = {
    //   login: "",
    //   password: ""
    // };
  }

  onChangeValue(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    // document.querySelector

    const { login, password } = this.state;

    // const { onSubmit } = this.props;
    // onSubmit(formData);
  }

  render() {
    const { login, password } = this.state;

    return (
      <div>
        <Form style={{ width: "80%", margin: "auto" }}>
          <Form.Group controlId="formGroupLogin" className="box">
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
          <Form.Group controlId="formGroupPassword" className="box">
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
          <div className="box float-right">
            <Button type="submit" color="primary">
              SignIn
            </Button>
          </div>
        </Form>
      </div>
    );
  }
}

export default SignIn;

import React from "react";
import renderer from "react-test-renderer";
import SigninForm from "./SigninForm";

describe("Check Components", () => {
  it("Component SigninForm", () => {
    const tree = renderer
      .create(<SigninForm />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  })
})
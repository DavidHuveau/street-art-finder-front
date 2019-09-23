import React from "react";
import renderer from "react-test-renderer";
import ArtworkSuggestForm from "./ArtworkSuggestForm";

describe("Check Components", () => {
  it("Component ArtworkSuggestForm", () => {
    const tree = renderer
      .create(<ArtworkSuggestForm />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  })
})
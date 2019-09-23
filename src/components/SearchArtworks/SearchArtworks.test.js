import React from "react";
import renderer from "react-test-renderer";
import SearchArtworks from "./SearchArtworks";

describe("Check Components", () => {
  it("Component SearchArtworks", () => {
    const tree = renderer
      .create(<SearchArtworks />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  })
})
import React from "react";
import { shallow } from "enzyme";
import ArtworkSuggestForm from "./ArtworkSuggestForm";

describe("Check Components", () => {
  it("Component ArtworkSuggestForm", () => {
    const component = shallow(<ArtworkSuggestForm />);

    expect(component).toMatchSnapshot();
  });
});

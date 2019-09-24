import React from "react";
import { mount } from "enzyme";
import SearchArtworks from "./SearchArtworks";

const clickFn = jest.fn();

describe("Check Components", () => {
  it("Component SearchArtworks", () => {
    const component = mount(<SearchArtworks onSearch={clickFn} />);

    component.find("input").simulate("change", {
      target: { value: "Reims" }
    });
    expect(component.state("valueCriteria")).toEqual("Reims");

    component.find("button#submit-button").simulate("click");
    expect(clickFn).toHaveBeenCalled();

    expect(component).toMatchSnapshot();
    component.unmount();
  });
});

import React from "react";
import { mount } from 'enzyme';
import SearchArtworks from "./SearchArtworks";

describe("Check Components", () => {
  it("Component SearchArtworks", () => {
    const component = mount(<SearchArtworks />);
    component.find("input").simulate('change', {
      target: { value: 'Reims' }
    })

    expect(component.state('valueCriteria')).toEqual('Reims')
    expect(component).toMatchSnapshot();

    component.unmount();
  })
})


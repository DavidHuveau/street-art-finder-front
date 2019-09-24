import React from "react";
import { shallow } from 'enzyme';
import SigninForm from "./SigninForm";

describe("Check Components", () => {
  fit("Component SigninForm", () => {
    const component = shallow(<SigninForm />);
    expect(component).toMatchSnapshot();
  })
})


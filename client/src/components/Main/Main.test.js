import React from 'react';
import enzyme, { shallow } from "enzyme";

import Main from './Main';

const wrapper = shallow(<Main />)

describe("Main", function() {
  it("should render <Main /> without throwing an error", function() {
    expect(wrapper.exists(<main></main>)).toBe(true);
  });
  it("should render div with a class of 'my-container' without throwing an error", function () {
    expect(wrapper.exists(<div className='my-container'></div>)).toBe(true);
  });
});
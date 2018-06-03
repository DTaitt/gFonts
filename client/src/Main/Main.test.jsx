import React from 'react';
import enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Main from './Main';

enzyme.configure({ adapter: new Adapter() });

const MainWrapper = shallow(<Main />)

describe("Main", function() {
  it("should render <Main /> without throwing an error", function() {
    expect(MainWrapper.exists(<main></main>)).toBe(true);
  });
  it("should render div with a class of 'my-container' without throwing an error", function () {
    expect(MainWrapper.exists(<div className='my-container'></div>)).toBe(true);
  });
});
import React from 'react';
import enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import App from './App';
import Header from './../Header/Header'

enzyme.configure({ adapter: new Adapter() });

const wrapper = shallow(<App />)

describe("App", function() {
  it("should render <App /> without throwing an error", function() {
    expect(wrapper.exists(<div className='App'></div>)).toBe(true);
  });
  it("should render <Header /> without throwing an error", function () {
    expect(wrapper.exists(<Header/>)).toBe(true);
  });
});
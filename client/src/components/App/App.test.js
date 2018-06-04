import React from 'react';
import enzyme, { shallow } from "enzyme";

import App from './App';
import Header from './../Header/Header'


const wrapper = shallow(<App />)

describe("App", function() {
  it("should render <App /> without throwing an error", function() {
    expect(wrapper.exists(<div className='App'></div>)).toBe(true);
  });
  it("should render <Header /> without throwing an error", function () {
    expect(wrapper.exists(<Header/>)).toBe(true);
  });
});
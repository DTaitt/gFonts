import React from "react";
import enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Collapsible, CollapsibleItem, Card, Badge } from "react-materialize";
enzyme.configure({ adapter: new Adapter() });

import Sidebar from './Sidebar';

const wrapper = shallow(<Sidebar />);

describe("Sidebar", function () {
    it("should render <Sidebar /> without throwing an error", function () {
        expect(wrapper.exists(<Card className='sidebar cyan darken-2'></Card>)).toBe(true);
    });
    // it("should render div with a class of 'my-container' without throwing an error", function () {
    //     expect(wrapper.exists(<div className='my-container'></div>)).toBe(true);
    // });
    // it("should render <Navbar /> without throwing an error", function () {
    //     expect(wrapper.exists(<Navbar brand='Font Finder' />)).toBe(true);
    // });
});
import React from "react";
import enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { CollectionItem } from "react-materialize";
enzyme.configure({ adapter: new Adapter() });

import Search from './Search';

const wrapper = shallow(<Search />);

describe("Search", function () {
    it("should render <Search /> without throwing an error", function () {
        expect(wrapper.exists(<CollectionItem className="search"></CollectionItem>)).toBe(true);
    });
});
import React from "react";
import enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { CollectionItem } from "react-materialize";
enzyme.configure({ adapter: new Adapter() });

import Categories from './Categories';

const wrapper = shallow(<Categories />);

describe("Categories", function () {
    it("should render <Categories /> without throwing an error", function () {
        expect(wrapper.exists(<CollectionItem className="categories"></CollectionItem>)).toBe(true);
    });
});
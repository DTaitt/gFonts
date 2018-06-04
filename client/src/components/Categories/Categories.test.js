import React from "react";
import enzyme, { shallow } from "enzyme";
import { CollectionItem } from "react-materialize";

import Categories from './Categories';

const wrapper = shallow(<Categories />);

describe("Categories", function () {
    it("should render <Categories /> without throwing an error", function () {
        expect(wrapper.exists(<CollectionItem className="categories"></CollectionItem>)).toBe(true);
    });
});
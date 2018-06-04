import React from "react";
import enzyme, { shallow } from "enzyme";

import Filter from './Filter';
import Search from '../Search/Search';
import Categories from '../Categories/Categories';
import Variants from '../Variants/Variants';

const wrapper = shallow(<Filter />);

describe("Filter", function () {
    it("should render <Filter /> without throwing an error", function () {
        expect(wrapper.exists(<div className="filter"></div>)).toBe(true);
    });
    it("should render <Search /> without throwing an error", function () {
        expect(wrapper.exists(Search)).toBe(true);
    });
    it("should render <Categories /> without throwing an error", function () {
        expect(wrapper.exists(Categories)).toBe(true);
    });
    it("should render <Variants /> without throwing an error", function () {
        expect(wrapper.exists(Variants)).toBe(true);
    });
});
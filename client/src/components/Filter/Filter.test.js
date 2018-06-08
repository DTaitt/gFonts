import React from 'react';
import enzyme, { shallow } from 'enzyme';

import Filter from './Filter';
import Search from 'components/Search/Search';
import Categories from 'components/Categories/Categories';
import Variants from 'components/Variants/Variants';

const wrapper = shallow(<Filter />);

describe('Filter', () => {
	it('should render <Filter /> without throwing an error', () => {
		expect(wrapper.exists(<div className="filter" />)).toBe(true);
	});
	it('should render <Search /> without throwing an error', () => {
		expect(wrapper.exists(Search)).toBe(true);
	});
	it('should render <Categories /> without throwing an error', () => {
		expect(wrapper.exists(Categories)).toBe(true);
	});
	it('should render <Variants /> without throwing an error', () => {
		expect(wrapper.exists(Variants)).toBe(true);
	});
});

import React from 'react';
import enzyme, { shallow } from 'enzyme';
import { CollectionItem } from 'react-materialize';

import SearchFilter from './SearchFilter';

const wrapper = shallow(<SearchFilter />);

describe('SearchFilter', () => {
	it('should render <SearchFilter /> without throwing an error', () => {
		expect(wrapper.exists(<CollectionItem className="search" />)).toBe(true);
	});
});

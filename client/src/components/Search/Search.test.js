import React from 'react';
import enzyme, { shallow } from 'enzyme';
import { CollectionItem } from 'react-materialize';

import Search from './Search';

const wrapper = shallow(<Search />);

describe('Search', () => {
	it('should render <Search /> without throwing an error', () => {
		expect(wrapper.exists(<CollectionItem className="search" />)).toBe(true);
	});
});

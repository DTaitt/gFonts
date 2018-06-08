import React from 'react';
import enzyme, { shallow } from 'enzyme';
import { Collapsible, CollapsibleItem, Card, Badge } from 'react-materialize';

import Sidebar from './Sidebar';

const wrapper = shallow(<Sidebar />);

describe('Sidebar', () => {
	it('should render <Sidebar /> without throwing an error', () => {
		expect(wrapper.exists(<Card className="sidebar cyan darken-2" />)).toBe(true);
	});
});

import React from 'react';
import enzyme, { shallow } from 'enzyme';
import { CollectionItem } from 'react-materialize';

import Variants from './Variants';

const wrapper = shallow(<Variants />);

describe('Variants', () => {
	it('should render <Variants /> without throwing an error', () => {
		expect(wrapper.exists(<CollectionItem className="variant" />)).toBe(true);
	});
});

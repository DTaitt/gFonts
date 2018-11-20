import React from 'react';
import enzyme, { shallow } from 'enzyme';
import Header from './Header';

const wrapper = shallow(<Header />)

describe('Header', () => {
	describe('should render', () => {
		it('itself', () => {
			expect(wrapper.exists()).toBe(true)
		})
	});
});
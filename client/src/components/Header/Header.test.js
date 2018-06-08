import React from 'react';
import enzyme, { shallow } from 'enzyme';
import { Navbar, Container } from 'react-materialize';

import Header from './Header';

const wrapper = shallow(<Header />);

describe('Header', () => {
	it('should render <Header /> without throwing an error', () => {
		expect(wrapper.exists(<header />)).toBe(true);
	});
	it('should render div with a class of \'my-container\' without throwing an error', () => {
		expect(wrapper.exists(<div className="my-container" />)).toBe(true);
	});
	it('should render <Navbar /> without throwing an error', () => {
		expect(wrapper.exists(<Navbar brand="Font Finder" />)).toBe(true);
	});
});

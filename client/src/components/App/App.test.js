import React from 'react';
import enzyme, { shallow } from 'enzyme';

import App from './App';
import Header from 'components/Header/Header';

const wrapper = shallow(<App />);

describe('App', () => {
	it('should render <App /> without throwing an error', () => {
		expect(wrapper.exists(<div className="App" />)).toBe(true);
	});
	it('should render <Header /> without throwing an error', () => {
		expect(wrapper.exists(<Header />)).toBe(true);
	});
});
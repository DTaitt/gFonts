import React from 'react';
import enzyme, { shallow } from 'enzyme';

import App from './App';
import Header from 'components/Header/Header';
import Main from '../Main/Main';

const wrapper = shallow(<App />);

describe('App', () => {
	it('should render', () => {
		expect(wrapper.exists(<div className="App" />)).toBe(true);
	});
	it('should render <Header />', () => {
		expect(wrapper.exists(<Header />)).toBe(true);
	});
	it('should render <Main />', () => {
		expect(wrapper.exists(<Main />)).toBe(true);
	});
});
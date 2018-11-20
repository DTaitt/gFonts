import React from 'react';
import enzyme, { shallow } from 'enzyme';
import FontList from './../FontList/FontList'
import Sidebar from './../Sidebar/Sidebar'
import Main from './Main';

const wrapper = shallow(<Main />)

describe('Main', () => {
	describe('should render', () => {
		it('itself', () => {
			expect(wrapper.exists()).toBe(true)
		})
		it('<FontList />', () => {
			expect(wrapper.exists(<FontList />)).toBe(true)
		})
		it('<Sidebar />', () => {
			expect(wrapper.exists(<Sidebar />)).toBe(true)
		})
	});
});
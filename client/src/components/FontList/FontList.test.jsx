import React from 'react';
import enzyme, { shallow, mount } from 'enzyme';
import FontList from './FontList';
import { FontList as DumbFontList } from './FontList'
import { Provider } from 'react-redux';
import store from './../../redux/store'

const _wrapper = shallow(
	<Provider store={store}>
		<FontList />
	</Provider>
)

const wrapper = _wrapper.dive({context: {store}}).dive()

describe('<FontList />', () => {
	describe('it should render', () => {
		it('itself', () => {
			expect(wrapper.exists()).toBe(true)
		})
		it('dumb', () => {
			expect(wrapper.exists(<DumbFontList />)).toBe(true)
		})
	})
	it('should have props', () => {
		expect(wrapper.dive().props()).toBe('4')
	})
})

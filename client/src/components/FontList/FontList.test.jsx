import enzyme, { mount, shallow } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import store from 'redux/store'
import FontList from './FontList';
import { FontList as DumbFontList } from './FontList'

const wrapper = shallow(
	<Provider store={store}>
		<FontList />
	</Provider>
)

// const wrapper = _wrapper.dive({context: {store}}).dive()

beforeEach(() => {

})

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
		const FL = wrapper.find(FontList).dive({ context: { store } })
		FL.instance().componentDidMount()
		expect(FL.props()).toBe({test:'test'})
	})
	// console.log(store.getState())
	// console.log(wrapper.find(FontList).dive({ context: { store } }).props())
})

import React from 'react';
import enzyme, { shallow } from 'enzyme';
import { Provider } from 'react-redux';

import FontListContainer from './FontListContainer';
import FontList from 'components/FontList/FontList';
import store from 'redux/store';

const wrapper = shallow(<Provider store={store}>
	<FontListContainer />
</Provider>);

describe('FontListContainer', () => {
	it('should render without throwing an error', () => {
		expect(wrapper.exists(FontList)).toBe(true);
	});
});

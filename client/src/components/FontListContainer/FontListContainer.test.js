import React from 'react';
import enzyme, { shallow } from 'enzyme';
import { Provider } from 'react-redux';

import {FontListContainer} from './FontListContainer';
import FontList from 'components/FontList/FontList';
import configureStore from 'redux-mock-store';

const initialState = {fontData:[]};
const mockStore = configureStore();
let store;
let wrapper;

beforeEach(() => {
	store = mockStore(initialState);
	wrapper = shallow(
		<Provider store={store}>
			<FontListContainer />
		</Provider>
	);
});

describe.only('FontListContainer', () => {
	it('should render FontList', () => {
		expect(wrapper.exists(FontList)).toBe(true);
	});
	it('should call fetchFontsData', () => {
		expect(wrapper.instance().fetchFontsData).toHaveBeenCalled;
	});
});

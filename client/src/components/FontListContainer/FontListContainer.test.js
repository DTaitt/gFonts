import React from 'react';
import enzyme, { shallow } from 'enzyme';
import { Provider } from 'react-redux';

import {FontListContainer} from './FontListContainer';
import FontList from 'components/FontList/FontList';
import {setupWrapper} from 'utilities/utilities';

const initialProps = {
	filterFontData: [
		{
			a: '1',
			b: '2',
			c: '3'
		},
		{
			aa: '11',
			bb: '22',
			cc: '33'
		},
	]
};

let {wrapper, props} = setupWrapper(FontListContainer, initialProps);

describe('FontListContainer', () => {
	it('should render <FontList />', () => {
		expect(wrapper.exists(<FontList />)).toBe(true);
	});
	it('should call fetchFontsData', () => {
		expect(wrapper.instance().fetchFontsData).toHaveBeenCalled;
	});
});

import React from 'react';
import enzyme, { shallow } from 'enzyme';
import { Provider } from 'react-redux';

import {FontListContainer} from './FontListContainer';
import FontList from 'components/FontList/FontList';
import {createWrapper} from 'utilities/utilities';
import {initializeFontData} from 'redux/actions/actions';

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
	],
	initializeFontData,
};

let {wrapper, props} = createWrapper(FontListContainer, initialProps);

describe('FontListContainer', () => {
	it('should render <FontList />', () => {
		expect(wrapper.exists(<FontList />)).toBe(true);
	});
	it('should call initializeFontData', () => {
		expect(wrapper.instance().initializeFontData).toHaveBeenCalled;
	});
	it('should pass correct props to <FontList />', () => {
		expect(wrapper.find(FontList).props().fontData).toEqual(props.filterFontData);
	});
});

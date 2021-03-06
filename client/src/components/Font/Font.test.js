import React, {Fragment} from 'react';
import enzyme from 'enzyme';

import ConnectedFontContainer from './FontContainer';
import Font from 'components/Font/Font';
import {createWrapper} from 'utilities/utilities';

const initialProps = {
	category:'category',
	family:'family',
	urlFamily:'urlFamily',
	id:'id',
	url:'url',
	variants:['variant','second variant', 'third variant']
};

let {wrapper, props} = createWrapper(ConnectedFontContainer, initialProps);

describe('FontContainer', () => {
	it('should render <Font />', () => {
		expect(wrapper.exists(<Font />)).toBe(true);
	});
});
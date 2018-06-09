import React, {Fragment} from 'react';
import enzyme from 'enzyme';

import FontContainer from './FontContainer';
import Font from 'components/Font/Font';
import {setupWrapper} from 'utilities/utilities';

const initialProps = {
	category:'category',
	family:'family',
	hrefFamily:'hrefFamily',
	id:'id',
	url:'url',
	variants:['variant','second variant', 'third variant']
};

describe('FontContainer', () => {
	const {wrapper, props} = setupWrapper(<FontContainer {...initialProps} />, initialProps);
    
	describe('should render', () => {
		it('itself', () => {
			expect(wrapper.exists(<Fragment></Fragment>)).toBe(true);
		});
		it('Font', () => {
			expect(wrapper.exists(<Font />)).toBe(true);
		});
	});
});


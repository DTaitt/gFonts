import React, {Fragment} from 'react';
import enzyme from 'enzyme';

import FontContainer from './FontContainer';
import Font from 'components/Font/Font';
import {setupWrapper} from 'utilities/utilities';

const initialProps = {
	category:'category',
	family:'family',
	urlFamily:'urlFamily',
	id:'id',
	url:'url',
	variants:['variant','second variant', 'third variant']
};

let {wrapper} = setupWrapper(FontContainer, initialProps);
const renderables = [
	{
		name: 'itself',
		node: <Fragment></Fragment>
	},
	{
		name: '<Font />',
		node: <Font />
	},
];

describe('FontContainer', () => {
	describe('should render', () =>{
		renderables.forEach(renderable => {
			it(renderable.name , () => {
				expect(wrapper.exists(renderable.node)).toBe(true);
			});
		});
	});
});
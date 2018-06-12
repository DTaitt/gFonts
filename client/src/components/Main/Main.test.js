import React from 'react';
import enzyme, { shallow } from 'enzyme';

import Main from './Main';
import {setupWrapper} from 'utilities/utilities';

let {wrapper} = setupWrapper(Main);
const renderables = [
	{
		name: 'itself',
		node: <main />
	},
	{
		name: 'a div with a class of \'my-container\'',
		node: <div className="my-container" />
	},
];

describe('Main', () => {
	describe('should render', () =>{
		renderables.forEach(renderable => {
			it(renderable.name , () => {
				expect(wrapper.exists(renderable.node)).toBe(true);
			});
		});
	});
});
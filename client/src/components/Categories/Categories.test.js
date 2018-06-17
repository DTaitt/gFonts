import React from 'react';
import enzyme, { shallow } from 'enzyme';
import { CollectionItem } from 'react-materialize';

import Categories from './Categories';
import {setupWrapper} from 'utilities/utilities';

let {wrapper} = setupWrapper(Categories);
const renderables = [
	{
		name: 'itself',
		node: <CollectionItem className="categories" />
	},
];

describe('Categories', () => {
	describe('should render', () =>{
		renderables.forEach(renderable => {
			it(renderable.name , () => {
				expect(wrapper.exists(renderable.node)).toBe(true);
			});
		});
	});
});
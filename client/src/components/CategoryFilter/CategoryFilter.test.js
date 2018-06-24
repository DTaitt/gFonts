import React from 'react';
import enzyme, { shallow } from 'enzyme';
import { CollectionItem } from 'react-materialize';

import CategoryFilter from './CategoryFilter';
import {setupWrapper} from 'utilities/utilities';

let {wrapper} = setupWrapper(CategoryFilter);
const renderables = [
	{
		name: 'itself',
		node: <CollectionItem className="categories" />
	},
];

describe('<CategoryFilter />', () => {
	describe('should render', () =>{
		renderables.forEach(renderable => {
			it(renderable.name , () => {
				expect(wrapper.exists(renderable.node)).toBe(true);
			});
		});
	});
});
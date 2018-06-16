import React from 'react';
import enzyme, { shallow } from 'enzyme';
import {Collection} from 'react-materialize';

import Filter from './Filter';
import Search from 'components/Search/Search';
import Categories from 'components/Categories/Categories';
import VariantsFilter from 'components/VariantsFilter/VariantsFilter';
import {setupWrapper} from 'utilities/utilities';

let {wrapper} = setupWrapper(Filter);
const renderables = [
	{
		name: 'itself',
		node: <div className="filter" />
	},
	{
		name: '<Collection />',
		node: <Collection />
	},
	{
		name: '<Search />',
		node: <Search />
	},
	{
		name: '<Categories />',
		node: <Categories />
	},
	{
		name: '<VariantsFilter />',
		node: <VariantsFilter />
	},
];

describe('Filter', () => {
	describe('should render', () =>{
		renderables.forEach(renderable => {
			it(renderable.name , () => {
				expect(wrapper.exists(renderable.node)).toBe(true);
			});
		});
	});
});

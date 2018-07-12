import React from 'react';
import enzyme, { shallow } from 'enzyme';
import {Collection} from 'react-materialize';

import Filter from './Filter';
import SearchFilterContainer from 'components/SearchFilterContainer/SearchFilterContainer';
import {createWrapper} from 'utilities/utilities';

let {wrapper} = createWrapper(Filter);
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
		name: '<SearchFilterContainer />',
		node: <SearchFilterContainer />
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

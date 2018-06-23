import React, {Fragment} from 'react';
import enzyme from 'enzyme';

import {SearchContainer} from './SearchContainer';
import Search from 'components/Search/Search';
import {setupWrapper} from 'utilities/utilities';

const initialProps = {
	updateSearchValue(){}
};

let {wrapper} = setupWrapper(SearchContainer, initialProps);
const renderables = [
	{
		name: 'itself',
		node: <Search />
	},
];

describe('SearchContainer', () => {
	describe('should render', () =>{
		renderables.forEach(renderable => {
			it(renderable.name , () => {
				expect(wrapper.exists(renderable.node)).toBe(true);
			});
		});
	});
});
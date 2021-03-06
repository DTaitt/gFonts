import React, {Fragment} from 'react';
import enzyme from 'enzyme';

import SearchFilter from 'components/SearchFilter/SearchFilter';
import {createWrapper} from 'utilities/utilities';
import {SearchFilterContainer} from './SearchFilterContainer';

const initialProps = {
	updateSearchValue(){}
};

let {wrapper} = createWrapper(SearchFilterContainer, initialProps);
const renderables = [
	{
		name: 'itself',
		node: <SearchFilter />
	},
];

describe('<SearchFilterContainer />', () => {
	describe('should render', () =>{
		renderables.forEach(renderable => {
			it(renderable.name , () => {
				expect(wrapper.exists(renderable.node)).toBe(true);
			});
		});
	});
});
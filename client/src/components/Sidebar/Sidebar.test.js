import React from 'react';
import enzyme, { shallow } from 'enzyme';
import { Collapsible, CollapsibleItem, Card, Badge } from 'react-materialize';

import Sidebar from './Sidebar';
import {createWrapper} from 'utilities/utilities';
import Filter from 'components/Filter/Filter';

let {wrapper} = createWrapper(Sidebar);
const renderables = [
	{
		name: 'itself',
		node: <Card className="sidebar cyan darken-2" />
	},
	{
		name: '<Collapsible /> that is an accordion',
		node: <Collapsible accordion />
	},
	{
		name: '<CollapsibleItem /> for filter',
		node: <CollapsibleItem header='Filter' icon='search' />
	},
	{
		name: '<Filter />',
		node: <Filter />
	},
	{
		name: '<Badge />',
		node: <Badge />
	},
	{
		name: '<CollapsibleItem /> for favorites',
		node: <CollapsibleItem header='Favorites' icon='favorite' className='favorite' />
	}
];

describe('Sidebar', () => {
	describe('should render', () =>{
		renderables.forEach(renderable => {
			it(renderable.name , () => {
				expect(wrapper.exists(renderable.node)).toBe(true);
			});
		});
	});
});
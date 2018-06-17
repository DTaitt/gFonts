import React from 'react';
import enzyme, { shallow } from 'enzyme';
import { CollectionItem } from 'react-materialize';

import VariantsFilter from './VariantsFilter';
import {setupWrapper} from 'utilities/utilities';

let {wrapper} = setupWrapper(VariantsFilter);
const renderables = [
	{
		name: 'itself',
		node: <CollectionItem className="variant" />
	},
];

describe('VariantsFilter', () => {
	describe('should render', () =>{
		renderables.forEach(renderable => {
			it(renderable.name , () => {
				expect(wrapper.exists(renderable.node)).toBe(true);
			});
		});
	});
});

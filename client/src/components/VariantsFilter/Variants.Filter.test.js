import React from 'react';
import enzyme, { shallow } from 'enzyme';
import { CollectionItem } from 'react-materialize';

import Variants from './Variants';
import {setupWrapper} from 'utilities/utilities';

let {wrapper} = setupWrapper(Variants);
const renderables = [
	{
		name: 'itself',
		node: <CollectionItem className="variant" />
	},
];

describe('Variants', () => {
	describe('should render', () =>{
		renderables.forEach(renderable => {
			it(renderable.name , () => {
				expect(wrapper.exists(renderable.node)).toBe(true);
			});
		});
	});
});

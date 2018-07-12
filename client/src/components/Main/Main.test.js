import React from 'react';
import enzyme, { shallow } from 'enzyme';

import Main from './Main';
import {createWrapper} from 'utilities/utilities';
import ConnectedFontListContainer from 'components/FontListContainer/FontListContainer';
import ConnectedSidebar from 'components/Sidebar/Sidebar';

let {wrapper} = createWrapper(Main);
const renderables = [
	{
		name: 'itself',
		node: <main />
	},
	{
		name: 'a div with a class of \'my-container\'',
		node: <div className="my-container" />
	},
	{
		name: '<ConnectedFontListContainer />',
		node: <ConnectedFontListContainer />
	},
	{
		name: '<ConnectedSidebar />',
		node: <ConnectedSidebar />
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
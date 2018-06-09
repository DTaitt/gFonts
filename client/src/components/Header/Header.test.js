import React from 'react';
import enzyme, { shallow } from 'enzyme';
import { Navbar, Container } from 'react-materialize';

import Header from './Header';
import {setupWrapper} from 'utilities/utilities';

const {wrapper} = setupWrapper(<Header />);
const renderables = [
	{
		name: 'itself',
		node: <header />
	},
	{
		name: 'a div with a class of \'my-container\'',
		node: <div className="my-container" />
	},
	{
		name: '<Navbar />',
		node: <Navbar brand="Font Finder" />
	}
];

describe('Header', () => {
	describe('should render', () =>{
		renderables.forEach(renderable => {
			it(renderable.name , () => {
				expect(wrapper.exists(renderable.node)).toBe(true);
			});
		});
	});
});
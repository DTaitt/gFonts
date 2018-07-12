import React from 'react';
import enzyme, { shallow } from 'enzyme';

import App from './App';
import Header from 'components/Header/Header';
import Main from 'components/Main/Main';
import {createWrapper} from 'utilities/utilities';

let {wrapper} = createWrapper(App);
const renderables = [
	{
		name: 'itself',
		node: <div className="App" />
	},
	{
		name: '<Header />',
		node: <Header />
	},
	{
		name: '<Main />',
		node: <Main />
	}
];

describe('App', () => {
	describe('should render', () =>{
		renderables.forEach(renderable => {
			it(renderable.name , () => {
				expect(wrapper.exists(renderable.node)).toBe(true);
			});
		});
	});
});
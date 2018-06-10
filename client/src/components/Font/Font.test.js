import React from 'react';
import enzyme, {shallow} from 'enzyme';
import {CardPanel} from 'react-materialize';
import Font from './Font';
import { setupWrapper } from 'utilities/utilities';


const initialProps = {
	category:'category',
	family:'family',
	urlFamily:'urlFamily',
	id:'id',
	url:'url',
	variants:['variant','second variant', 'third variant']
};

const {wrapper} = setupWrapper(<Font {...initialProps} />, initialProps);
const renderables = [
	{
		name: 'itself',
		node: <CardPanel className="font-card white black-text z-depth-2" />
	},
	{
		name: 'font information',
		node: <div className="font info" />
	},
	{
		name: 'font interaction',
		node: <div className="font-interaction" />
	},
];

describe('Font', () => {
	describe('should render', () =>{
		renderables.forEach(renderable => {
			it(renderable.name , () => {
				expect(wrapper.exists(renderable.node)).toBe(true);
			});
		});
	});
});
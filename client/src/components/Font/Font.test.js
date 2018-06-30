import React from 'react';
import enzyme, {shallow} from 'enzyme';
import {CardPanel, Button} from 'react-materialize';
import Font from './Font';
import { setupWrapper } from 'utilities/utilities';
import FontInfo from '../FontInfo/FontInfo';
import AddToProjectModal from '../AddToProjectModal/AddToProjectModal';


const initialProps = {
	category:'category',
	family:'family',
	urlFamily:'urlFamily',
	id:'id',
	url:'url',
	variants:['variant','second variant', 'third variant']
};


let {wrapper} = setupWrapper(Font, initialProps);
const renderables = [
	{
		name: 'itself',
		node: <CardPanel className="font-card white black-text z-depth-2" />
	},
	{
		name: '<FontInfo />',
		node: <FontInfo />
	},
	{
		name: 'font interaction',
		node: <div className="font-interaction" />
	},
];

const childComponents = [
	{
		name: '<FontInfo />',
		node: FontInfo,
		props: {
			category:'category',
			family:'family',
			id:'id',
			url:'url',
			variants:['variant','second variant', 'third variant']
		}
	},
	{
		name: '<AddToProjectModal />',
		node: AddToProjectModal,
		props: {
			category:'category',
			family:'family',
			url:'url',
		}
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
	describe('should pass correct props to', () =>{
		childComponents.forEach(component => {
			it(component.name , () => {
				expect(wrapper.find(component.node).props()).toEqual(component.props);
			});
		});
	});
});
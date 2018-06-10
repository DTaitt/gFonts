import React from 'react';
import enzyme, {shallow} from 'enzyme';
import AddToProjectModal from './AddToProjectModal';
import {Modal,Button} from 'react-materialize';
import {setupWrapper} from 'utilities/utilities';

const initialProps = {
	urlFamily: 'urlFamily',
	family: 'family',
	category: 'category',
};

const {wrapper, props} = setupWrapper(<AddToProjectModal {...initialProps} />, initialProps);
const renderables = [
	{
		name: 'itself (modal trigger)',
		node: <Modal header={initialProps.family} trigger={<Button>Add Style</Button>} className='import-code' />
	},
	{
		name: 'html section',
		node: <div className="html" />
	},
	{
		name: 'css section',
		node: <div className="css" />
	},
	{
		name: 'html quote',
		node: <blockquote className="html" />
	},
	{
		name: 'css quote',
		node: <blockquote className="css" />
	},
];

describe('FontInfo', () => {
	describe('should render', () => {
		renderables.forEach(renderable => {
			it(renderable.name , () => {
				expect(wrapper.exists(renderable.node)).toBe(true);
			});
		});
	});
});

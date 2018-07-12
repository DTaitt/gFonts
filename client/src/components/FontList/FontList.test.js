import React from 'react';
import enzyme, {shallow, mount} from 'enzyme';

import FontList from './FontList';
import ConnectedFontContainer from 'components/FontContainer/FontContainer';
import {formatFontUrl, createWrapper} from 'utilities/utilities';
import FontContainer from 'components/FontContainer/FontContainer';

const initialProps = {
	fontData: [
		{
			category:'category',
			family:'family',
			id:'family',
			url:formatFontUrl('urlFamily'),
			variants:[
				'variant',
				'second variant',
				'third variant',
			]
		},
		{
			category:'category 2',
			family:'family 2',
			id:'family 2',
			url:`${formatFontUrl('urlFamily')} 2`,
			variants:[
				'variant 2',
				'second variant 2',
				'third variant 2',
			]
		}
	]
};

let {wrapper, props} = createWrapper(FontList, initialProps);
const renderables = [
	{
		name: 'itself',
		node: <section className="card-display" />
	},
	{
		name: '<ConnectedFontContainer />',
		node: <ConnectedFontContainer />
	},
];

describe('FontList', () => {
	describe('should render', () => {
		renderables.forEach(renderable => {
			it(renderable.name , () => {
				expect(wrapper.exists(renderable.node)).toBe(true);
			});
		});
	});
	it('should render the correct number of <ConnectedFontContainer />\'s', () => {
		expect(wrapper.find(ConnectedFontContainer).length).toEqual(initialProps.fontData.length);
	});
	it('should pass the correct props to <ConnectedFontContainer />', () => {
		expect(wrapper.find(ConnectedFontContainer).at(0).props()).toEqual(props.fontData[0]);
	});
});
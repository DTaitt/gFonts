import React from 'react';
import enzyme, {shallow} from 'enzyme';
import FontInfo from './FontInfo';
import {setupWrapper} from 'utilities/utilities';
import {Dropdown, Collection, CollectionItem, Button} from 'react-materialize';

const initialProps = {
	url: 'url',
	family: 'family',
	category: 'category',
	variants: [
		'variant',
		'second variant',
		'third variant'
	]
};

let {wrapper, props} = setupWrapper(FontInfo, initialProps);
const renderables = [
	{
		name: 'itself',
		node: <div className="font info" />
	},
	{
		name: 'link to Google Fonts',
		node: <a href={initialProps.url} target='_blank' rel="noopener noreferrer" className="font url" />
	},
	{
		name: '<Dropdown /> for variants',
		node: <Dropdown trigger={
			<Button>{initialProps.variants.length} Variant{initialProps.variants.length > 1 && 's'}</Button>
		} />
	},
	{
		name: '<Collection /> of variants',
		node: <Collection />
	},
	{
		name: '<CollectionItem /> with each variant',
		node: <CollectionItem />
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
	it('should render the correct number of <CollectionItem />\'s', () => {
		expect(wrapper.find(CollectionItem).length).toEqual(initialProps.variants.length);
	});
	it('should have correct link', () => {
		expect(wrapper.find('.font.url').html()).toBe(
			'<a href="url" target="_blank" rel="noopener noreferrer" class="font url"><h1 class="family">family</h1></a>'
		);
	});
	it('should have correct family', () => {
		expect(wrapper.find('.family').html()).toBe(
			'<h1 class="family">family</h1>'
		);
	});
	it('should have correct category', () => {
		expect(wrapper.find('.category').html()).toBe(
			'<p class="category">category</p>'
		);
	});
});

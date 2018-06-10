// @flow
import enzyme, {shallow} from 'enzyme';
import React from 'react';
import type {Node} from 'react';

export function formatFontNameForHref(font: Object): string {
	return font.family.slice().split(' ').join('+');
}

export function addFontNameHrefFormat(fontData: Object[]): Object[] {
	return fontData.map(font => ({ ...font, urlFamily: formatFontNameForHref(font) }));
}

export function formatSingleVariant(variant: string): string {
	switch (variant) {
	case '100':
		return 'Thin';
	case '100italic':
		return 'Thin Italic';
	case '200':
		return 'Extra-Light';
	case '200italic':
		return 'Extra-Light Italic';
	case '300':
		return 'Light';
	case '300italic':
		return 'Light Italic';
	case 'regular':
		return 'Regular';
	case 'italic':
		return 'Italic';
	case '500':
		return 'Medium';
	case '500italic':
		return 'Medium Italic';
	case '600':
		return 'Semi-Bold';
	case '600italic':
		return 'Semi-Bold Italic';
	case '700':
		return 'Bold';
	case '700italic':
		return 'Bold Italic';
	case '800':
		return 'Extra Bold';
	case '800italic':
		return 'Extra Bold Italic';
	case '900':
		return 'Black';
	case '900italic':
		return 'Black Italic';
	default:
		return variant;
	}
}

export function formatVariants(variants: string[]): string[] {
	return variants.map(variant => formatSingleVariant(variant));
}

export function renameFontVariants(fontData: Object[]): Object[] {
	return fontData.map(font => ({ ...font, variants: formatVariants(font.variants) }));
}

export function formatFontData(fontData: Object[]): Object[] {
	return renameFontVariants(addFontNameHrefFormat(fontData));
}

export const categoryOptions: string[] = [
	'view all',
	'sans-serif',
	'serif',
	'display',
	'handwriting',
	'monospace',
];

export const variantOptions: string[] = [
	'Thin',
	'Thin Italic',
	'Extra-Light',
	'Extra-Light Italic',
	'Light',
	'Light Italic',
	'Regular',
	'Italic',
	'Medium',
	'Medium Italic',
	'Semi-Bold',
	'Semi-Bold Italic',
	'Bold',
	'Bold Italic',
	'Extra-Bold',
	'Extra-Bold Italic',
	'Black',
	'Black Italic',
];

export const options = {
	variants: [
		'Thin',
		'Thin Italic',
		'Extra-Light',
		'Extra-Light Italic',
		'Light',
		'Light Italic',
		'Regular',
		'Italic',
		'Medium',
		'Medium Italic',
		'Semi-Bold',
		'Semi-Bold Italic',
		'Bold',
		'Bold Italic',
		'Extra-Bold',
		'Extra-Bold Italic',
		'Black',
		'Black Italic',
	],
	categories: [
		'view all',
		'sans-serif',
		'serif',
		'display',
		'handwriting',
		'monospace',
	]
};

export function setupWrapper(component: Node, initialProps?: Object, propOverride?: Object) {
	let	props:Object = {...initialProps, ...propOverride};
	const wrapper:enzyme.ShallowWrapper = shallow(component);
	return {
		wrapper,
		props
	};
}

export function formatFontUrl(urlFamily: string) {
	return `https://fonts.google.com/specimen/${urlFamily}`;
}
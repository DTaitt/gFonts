import { formatFontNameForHref, addFontNameHrefFormat, formatSingleVariant, formatVariants, renameFontVariants, formatFontData, setupWrapper } from './utilities';
import React, {Component} from 'react';
import App from 'components/App/App';

describe('formatFontNameForHref', () => {
	it('should return the family property with each string seperated by a plus sign', () => {
		const initialString = {
			family: 'a string with multiple words',
		};
		const seperatedWithPlus = 'a+string+with+multiple+words';
		expect(formatFontNameForHref(initialString)).toBe(seperatedWithPlus);
	});
	it('should return the family property if the string has one word', () => {
		const initialString = {
			family: 'string',
		};
		const seperatedWithPlus = 'string';
		expect(formatFontNameForHref(initialString)).toBe(seperatedWithPlus);
	});
});

describe('addFontNameHrefFormat', () => {
	it('should add an href property with the formatted href to each object', () => {
		const arrOfObjects = [
			{
				family: 'a string with multiple words',
			},
			{
				family: 'another string with multiple words',
			},
		];
		const arrOfObjectsWithHref = [
			{
				family: 'a string with multiple words',
				hrefFamily: 'a+string+with+multiple+words',
			},
			{
				family: 'another string with multiple words',
				hrefFamily: 'another+string+with+multiple+words',
			},
		];
		expect(addFontNameHrefFormat(arrOfObjects)).toEqual(arrOfObjectsWithHref);
	});
});

describe('formatSingleVariant', () => {
	it('should return a new formatted variant', () => {
		const devVariant = '200italic';
		const formattedVariant = 'Extra-Light Italic';
		expect(formatSingleVariant(devVariant)).toBe(formattedVariant);
	});
});

describe('formatVariants', () => {
	it('should return a new array of formatted variants', () => {
		const arrOfVariants = ['200italic', 'regular', '800'];
		const arrOfFormattedVariants = ['Extra-Light Italic', 'Regular', 'Extra Bold'];
		expect(formatVariants(arrOfVariants)).toEqual(arrOfFormattedVariants);
	});
});

describe('renameFontVariants', () => {
	it('should return a new array of objects with formatted variants', () => {
		const arrOfObjectsWithVariants = [
			{
				variants: ['200italic', 'regular', '800'],
			},
			{
				variants: ['200', 'italic', '700italic'],
			},
		];
		const arrOfObjectsWithFormattedVariants = [
			{
				variants: ['Extra-Light Italic', 'Regular', 'Extra Bold'],
			},
			{
				variants: ['Extra-Light', 'Italic', 'Bold Italic'],
			},
		];
		expect(renameFontVariants(arrOfObjectsWithVariants)).toEqual(arrOfObjectsWithFormattedVariants);
	});
});

describe('formatFontData', () => {
	it('should return a new array of objects with formatted variants and href family', () => {
		const arrOfObjects = [
			{
				variants: ['200italic', 'regular', '800'],
				family: 'a string with multiple words',
			},
			{
				variants: ['200', 'italic', '700italic'],
				family: 'another string with multiple words',
			},
		];
		const arrOfObjectsWithFormattedVariantsAndHrefFamily = [
			{
				variants: ['Extra-Light Italic', 'Regular', 'Extra Bold'],
				family: 'a string with multiple words',
				hrefFamily: 'a+string+with+multiple+words',
			},
			{
				variants: ['Extra-Light', 'Italic', 'Bold Italic'],
				family: 'another string with multiple words',
				hrefFamily: 'another+string+with+multiple+words',
			},
		];
		expect(formatFontData(arrOfObjects)).toEqual(arrOfObjectsWithFormattedVariantsAndHrefFamily);
	});
});

describe('setupWrapper', () => {
	const initial = {
		a:1,
		b:2,
		c:3
	};
	function TestComponent() {
		return(
			<div>
				<p>I'm a test component</p>
			</div>
		);
	}
	it('should return initial as props when no override is given', () => {
		const {props} = setupWrapper(<TestComponent {...initial} />, initial, null);
		expect(props).toEqual(initial);
	});
	it('should update the props when an override is given', () => {
		const override = {
			a: 'a has been overriden',
			c: 'c has been too!'
		};
		const newProps = {
			a: 'a has been overriden',
			b: 2,
			c: 'c has been too!'
		};
		const {props} = setupWrapper(<TestComponent {...initial} />, initial, override);
		expect(props).toEqual(newProps);
	});
});
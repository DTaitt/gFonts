// @flow
import React from 'react';
import enzyme, {shallow} from 'enzyme';
import {CardPanel} from 'react-materialize';
import Font from './Font';


const props = {
	category:'category',
	family:'family',
	hrefFamily:'hrefFamily',
	id:'id',
	url:'url',
	variants:['variant','second variant', 'third variant']
};
const wrapper = shallow(
	<Font {...props} />
);

describe.only('Font',() => {
	it('should render' ,() => {
    	expect(wrapper.exists(
    		<CardPanel 
    			className="font-card white black-text z-depth-2"
    		></CardPanel>
    	)).toBe(true);
	});
	it('should render font information', () => {
    	expect(wrapper.exists(
    		<div className="font-info"></div>
    	)).toBe(true);
	});
	it('should render font interaction', () => {
		expect(wrapper.exists(
			<div className="font-interaction"></div>
    	)).toBe(true);
	});
});
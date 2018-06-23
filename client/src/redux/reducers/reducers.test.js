import {fontDataReducer, searchReducer} from './reducers';

describe('fontDataReducer', () => {
	let payload = [
		{ 
			category: 'first',
			family: 'first',
			variants: ['first', 'first', 'first']
		},
		{ 
			category: 'second',
			family: 'second',
			variants: ['second', 'second', 'second']
		},
	];
    
	const initial = [
		{ 
			category: 'first',
			family: 'first',
			variants: ['first', 'first', 'first']
		},
		{ 
			category: 'second',
			family: 'second',
			variants: ['second', 'second', 'second']
		},
	];
    
    
	describe('when type is INITIALIZE_FONT_DATA', () => {
		const action = {
			type: 'INITIALIZE_FONT_DATA',
			payload
		};
		it('should return an array equal to the action payload', () => {
			expect(fontDataReducer([], action)).toEqual(payload);
		});
	});
	describe('when type is UPDATE_FONTS_ON_FILTER', () => {
		let payload = 'fir';
		const action = {
			type: 'UPDATE_FONTS_ON_FILTER',
			payload
		};
		const expected = [
			{ 
				category: 'first',
				family: 'first',
				variants: ['first', 'first', 'first']
			},
		];
		it('should return an array where the payload appears in the objects category', () => {
			expect(fontDataReducer(initial, action)).toEqual(expected);
		});
	});
	describe('when type is not found', () => {
		const action = {
			type: 'testing testing', 
			payload
		};
		it('should return an empty array', () => {
			expect(fontDataReducer([], action)).toEqual([]);
		});
	});
});

describe('searchReducer', () => {
	const payload = 'payload';
	const action = {
		type: 'UPDATE_SEARCH_VALUE',
		payload,
	};
    
	describe('when type is UPDATE_SEARCH_VALUE', () => {
		it('should return a string equal to the action payload', () => {
			expect(searchReducer('', action)).toEqual(payload);
		});
	});
	describe('when type is not found', () => {
		it('should return an empty string', () => {
			expect(searchReducer('', {type: 'testing testing', payload})).toEqual('');
		});
	});
});
import {fontDataReducer, searchReducer, filterFontDataReducer} from './reducers';

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

describe('filterFontDataReducer', () => {
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

	describe('when type is INITIALIZE_FILTER_FONT_DATA', () => {
		const action = {
			type: 'INITIALIZE_FILTER_FONT_DATA',
			payload
		};
		it('should return an array equal to the action payload', () => {
			expect(filterFontDataReducer([], action)).toEqual(payload);
		});
	});

	describe('when type is UPDATE_FONTS_ON_SEARCH_FILTER', () => {
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
		const action = {
			type: 'UPDATE_FONTS_ON_SEARCH_FILTER',
			payload: 'fir',
			fontData: initial,
		};
		const expected = [
			{ 
				category: 'first',
				family: 'first',
				variants: ['first', 'first', 'first']
			},
		];
		it('should return an array where the payload appears in the objects category', () => {
			expect(filterFontDataReducer([], action)).toEqual(expected);
		});
	});
	describe('when type is not found', () => {
		const action = {
			type: 'testing testing', 
			payload
		};
		it('should return an empty array', () => {
			expect(filterFontDataReducer([], action)).toEqual([]);
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
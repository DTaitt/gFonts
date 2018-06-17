import {fontDataReducer, searchReducer} from './reducers';

describe('fontDataReducer', () => {
	const payload = [
		{ a: 1 },
		{ b: 2 },
		{ c: 3 },
	];
    
	const action = {
		type: 'INITIALIZE_FONT_DATA',
		payload
	};
    
	describe('when type is INITIALIZE_FONT_DATA', () => {
		it('should return an array equal to the action payload', () => {
			expect(fontDataReducer([], action)).toEqual(payload);
		});
	});
	describe('when type is not found', () => {
		it('should return an empty array', () => {
			expect(fontDataReducer([], {type: 'testing testing', payload})).toEqual([]);
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
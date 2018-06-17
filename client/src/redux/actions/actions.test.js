import { initializeFontData, updateSearchValue } from './actions';

describe('initializeFontData', () => {
	const payload = [
		{ a: 1 },
		{ b: 2 },
		{ c: 3 },
	];

	const action = {
		type: 'INITIALIZE_FONT_DATA',
		payload,
	};

	it('should return an object with type: INITIALIZE_FONT_DATA and a payload that is the input', () => {
		expect(initializeFontData(payload)).toEqual(action);
	});
});

describe('updateSearchValue', () => {
	const payload = 'payload';
	const action = {
		type: 'UPDATE_SEARCH_VALUE',
		payload,
	};
	it('should return an object with type: UPDATE_SEARCH_VALUE and payload that is the input', () => {
		expect(updateSearchValue(payload)).toEqual(action);
	});
});
// @flow
type action = {
    type: string,
    payload: Object[],
}

export function fontDataReducer(fontData: Object[] = [], action: action): Object[] {
	switch (action.type) {
	case 'INITIALIZE_FONT_DATA':
		return [
			...fontData,
			...action.payload,
		];
	default:
		return fontData;
	}
}

export function searchReducer(searchValue: string = '', action: {type: string, payload: string}) {
	switch (action.type) {
	case 'UPDATE_SEARCH_VALUE':
		return action.payload;
	default:
		return searchValue;
	}
}
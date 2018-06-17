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
		// case 'UPDATE_FONTS_ON_FILTER':
		// return fontData.filter(font => {
		// 	return
		// })
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

//@flow 
export function searchQueryReducer(searchQuery = '', action) {
	switch (action.type) {
	case 'UPDATE_SEARCH_QUERY':
		return action.payload;
	default:
		return searchQuery;
	}
}
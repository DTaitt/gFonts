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

export function filterFontDataReducer(filterFontData: Object[] = [], action: action): Object[] {
	switch (action.type) {
	case 'INITIALIZE_FILTER_FONT_DATA':
		return [
			...filterFontData,
			...action.payload,
		];
	case 'UPDATE_FONTS_ON_FILTER':
		const {fontData, payload} = action;
		return fontData.filter(font => {
			return font.family.toLowerCase().indexOf(payload) !== -1;
		});
	default:
		return filterFontData;
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

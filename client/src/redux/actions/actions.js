// @flow
export function initializeFontData(fontData: Object[]) {
	return({
		type: 'INITIALIZE_FONT_DATA',
		payload: fontData,
	});
}

export function updateSearchValue(value: string){
	return ({
		type: 'UPDATE_SEARCH_VALUE',
		payload: value,
	});
}

export function updateFontsOnFilter(searchValue: string){
	return ({
		type: 'UPDATE_FONTS_ON_FILTER',
		payload: searchValue
	});
}

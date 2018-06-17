// @flow
export function initializeFontData(fontData: Object[]) {
	// return function (dispatch: Function) {
	// 	dispatch({
	// 		type: 'INITIALIZE_FONT_DATA',
	// 		payload: fontData,
	// 	});
	// };
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

//@flow
export function updateSearchQuery(query){
	return function(dispatch) {
		dispatch({
			type: 'UPDATE_SEARCH_QUERY',
			payload: query,
		});
		dispatch({
			type: 'FILTER_BY_SEARCH_QUERY',
			payload: query,
		});
	};
}
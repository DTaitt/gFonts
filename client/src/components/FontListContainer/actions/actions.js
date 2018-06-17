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
	console.log(value);
	
}
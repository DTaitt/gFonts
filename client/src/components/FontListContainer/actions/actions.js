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

// @flow
export function initializeFontData(fontData: Object[]) {
	return (dispatch: Function) => {
		dispatch({type: 'LOADING_FONT_DATA'});
		dispatch({
			type: 'INITIALIZE_FONT_DATA',
			payload: fontData,
		});
		dispatch({
			type: 'INITIALIZE_FILTER_FONT_DATA',
			payload: fontData,
		});
	};
}

export function updateSearchValue(value: string){
	return (dispatch: Function, getState: Function) => {
		dispatch({type: 'UPDATING'});
		dispatch({
			type: 'UPDATE_SEARCH_VALUE',
			payload: value,
		});
		const {searchValue, fontData} = getState();
		dispatch({
			type: 'UPDATE_FONTS_ON_FILTER',
			payload: searchValue,
			fontData
		});
	};
}

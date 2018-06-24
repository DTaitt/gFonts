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
		dispatch({type: 'UPDATING_SEARCH_VALUE'});
		dispatch({
			type: 'UPDATE_SEARCH_VALUE',
			payload: value,
		});
		const {searchValue, fontData} = getState();
		dispatch({
			type: 'UPDATE_FONTS_ON_SEARCH_FILTER',
			payload: searchValue,
			fontData
		});
		console.log(getState());
	};
}

export function updateCategoryValue(value: string) {
	return (dispatch: Function, getState: Function) => {
		dispatch({type: 'UPDATING_CATEGORIES'});
		dispatch({
			type: 'UPDATE_CATEGORY_VALUE',
			payload: value
		});
		const {categoryValue, fontData} = getState();
		dispatch({
			type: 'UPDATE_FONTS_ON_CATEGORY_VALUE',
			payload: categoryValue,
			fontData
		});
		console.log(getState());
	};
}

export const updateSearchValue = (value) => (dispatch, getState) =>{
	dispatch({type: 'UPDATING_SEARCH_VALUE'});
	dispatch({
		type: 'UPDATE_SEARCH_VALUE',
		payload: value,
	});
	const { searchValue, fonts } = getState();
	dispatch({
		type: 'UPDATE_FONTS_ON_SEARCH_FILTER',
		payload: searchValue,
		fonts
	});
}
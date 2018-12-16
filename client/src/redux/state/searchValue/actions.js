export const updateSearchValue = (value) => (dispatch, getState) =>{
	dispatch({type: 'UPDATING_SEARCH_VALUE'});
	dispatch({
		type: 'UPDATE_SEARCH_VALUE',
		payload: value,
	});
	const { searchValue, fonts } = getState();
	
	const byMatchingTitle = (font) => font.family.toLowerCase().indexOf(searchValue) !== -1;
	const filteredFonts = fonts.filter(byMatchingTitle);

	dispatch({
		type: 'UPDATE_FONTS_ON_SEARCH_FILTER',
		payload: filteredFonts,
	});
}
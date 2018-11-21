export const updateCategoryValue = (value) => (dispatch, getState) => {
	dispatch({type: 'UPDATING_CATEGORIES'});
	dispatch({
		type: 'UPDATE_CATEGORY_VALUE',
		payload: value
	});
	const { categoryValue, fonts } = getState();
	dispatch({
		type: 'UPDATE_FONTS_ON_CATEGORY_VALUE',
		payload: categoryValue,
		fonts
	});
}
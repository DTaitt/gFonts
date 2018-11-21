export const searchReducer = (searchValue = '', action) => {
	switch (action.type) {
	case 'UPDATE_SEARCH_VALUE':
		return action.payload;
	default:
		return searchValue;
	}
}
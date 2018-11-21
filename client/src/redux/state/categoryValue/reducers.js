export const categoryReducer = (categoryValue = 'view all', action) => {
	switch (action.type) {
	case 'UPDATE_CATEGORY_VALUE':
		return action.payload;
	default:
		return categoryValue;
	}
}
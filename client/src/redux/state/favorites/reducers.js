export const favDataReducer = (favorites = [], action) => {
	switch (action.type) {
	case 'INITIALIZE_FAV_DATA':
		return action.payload
	case 'ADD_FAV_TO_FAV_SECTION':
		return [ ...favorites, action.payload ];
	case 'DELETE_FAV_FROM_FAV_SECTION':
		return favorites.filter(fav => fav.family !== action.payload);
	default:
		return favorites;
	}
}
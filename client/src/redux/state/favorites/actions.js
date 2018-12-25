import axios from 'axios';
import { URLPATH } from 'utilities/utilities';

export const initializeFavData = () => async (dispatch) => {
	dispatch({type: 'LOADING_FAV_DATA'});
	try {
		const { data: favorites } = await axios.get(URLPATH.FAVORITES);
		dispatch({
			type: 'INITIALIZE_FAV_DATA',
			payload: favorites,
		});
	} catch (error) {
		console.log(error);
		dispatch({ type: 'FAILED_FAV_INITIALIZATION' });
	}
}

export const deleteFavorite = (family) => async (dispatch) => {
	dispatch({type: 'DELETING_FAVORITE'});
	try {
		// await axios.delete(`${URLPATH.FAVORITES}${family}`);
		dispatch({
			type: 'DELETE_FAV_FROM_FAV_SECTION',
			payload: family,
		});
	} catch(error) {
		console.log(error);
		dispatch({
			type: 'FAILED_DELETE_FAV'
		});
	}
}

export const addFavorite = (font) => async (dispatch, getState) => {
	dispatch({type: 'ADDING_FAVORITE'});
	const { favorites } = getState();

	const isInFav = favorites.some(fav => fav.family === font.family)
	console.log(font)
	if (isInFav) {
		console.log('in fav')
		// deleteFavorite(font.family);
	} else {
		try {
			await axios.post(URLPATH.FAVORITES, font);
			dispatch({
				type: 'ADD_FAV_TO_FAV_SECTION',
				payload: font,
			});
		} catch (error) {
			console.log(error);
			dispatch({
				type: 'FAILED_ADD_FAV'
			});
		}
	}
}
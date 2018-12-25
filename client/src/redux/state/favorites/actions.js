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
		dispatch({
			type: 'DELETE_FAV_FROM_FAV_SECTION',
			payload: family,
		});
		await axios.delete(URLPATH.FAVORITES, { data: { family } });
	} catch(error) {
		dispatch({
			type: 'FAILED_DELETE_FAV'
		});
	}
}

export const addFavorite = (font) => async (dispatch, getState) => {
	const { favorites } = getState();
	const isInFav = favorites.some(fav => fav.family === font.family)
	if (isInFav) {
		console.log('dont add')
	} else {
		try {
			dispatch({type: 'ADDING_FAVORITE'});
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
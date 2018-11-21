// @flow
import axios from 'axios';
import { renameFontVariants , URLPATH} from 'utilities/utilities';

export const initializeFavData = () => async (dispatch, getState) => {
	dispatch({type: 'LOADING_FAV_DATA'});
	try {
		const { data: { favorites }} = await axios.get(URLPATH.FAVORITES);
		dispatch({
			type: 'INITIALIZE_FAV_DATA',
			payload: favorites,
		});
	} catch (error) {
		console.log(error);
		dispatch({ type: 'FAILED_FAV_INITIALIZATION' });
	}
}

export const deleteFavorite = (hrefFamily) => async (dispatch) => {
	dispatch({type: 'DELETING_FAVORITE'});
	try {
		await axios.delete(`${URLPATH.FAVORITES}${hrefFamily}`);
		dispatch({
			type: 'DELETE_FAV_FROM_FAV_SECTION',
			payload: hrefFamily,
		});
	} catch(error) {
		console.log(error);
		dispatch({
			type: 'FAILED_DELETE_FAV'
		});
	}
}

export const addFavorite = (font) => async(dispatch, getState) => {
	dispatch({type: 'ADDING_FAVORITE'});
	const { favorites } = getState();
	const isInFav = favorites.some(fav => fav.hrefFamily === font.hrefFamily)
	if (isInFav) {
		deleteFavorite(font.hrefFamily);
	} else if (isInFav) {
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
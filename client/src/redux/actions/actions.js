// @flow
import axios from 'axios';
import { renameFontVariants , URLPATH} from 'utilities/utilities';

export const initializeFontData = () => async (dispatch) => {
		dispatch({type: 'LOADING_FONT_DATA'});
		try {
			const { data: { items } } = await axios.get(URLPATH.FONTS);
			const fonts = renameFontVariants(items);
			dispatch({
				type: 'INITIALIZE_FONT_DATA',
				payload: fonts,
			});
			dispatch({
				type: 'INITIALIZE_FILTER_FONT_DATA',
				payload: fonts,
			});
		} catch (error) {
			console.error(error);
			dispatch({
				type: 'FAILED_FONT_INITIALIZATION'
			});
		}
}

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

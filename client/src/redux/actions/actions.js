// @flow
import axios from 'axios';
import {formatFontData, urlPath} from 'utilities/utilities';

export function initializeFontData() {
	return async (dispatch: Function) => {
		dispatch({type: 'LOADING_FONT_DATA'});
		let fonts;
		try {
			const res = await axios.get(urlPath.font);
			fonts = formatFontData(res.data.items);
			dispatch({
				type: 'INITIALIZE_FONT_DATA',
				payload: fonts,
			});
			dispatch({
				type: 'INITIALIZE_FILTER_FONT_DATA',
				payload: fonts,
			});
		} catch (error) {
			console.log(error);
			dispatch({
				type: 'FAILED_FONT_INITIALIZATION'
			});
		}
	};
}

export function initializeFavData() {
	return async (dispatch: Function, getState: Function) => {
		dispatch({type: 'LOADING_FAV_DATA'});
		let favorites;
		try {
			const res = await axios.get(urlPath.fav);
			favorites = res.data;
			dispatch({
				type: 'INITIALIZE_FAV_DATA',
				payload: favorites,
			});
		} catch (error) {
			console.log(error);
			dispatch({
				type: 'FAILED_FAV_INITIALIZATION'
			});
		}
	};
}

export function updateSearchValue(value: string){
	return (dispatch: Function, getState: Function) => {
		dispatch({type: 'UPDATING_SEARCH_VALUE'});
		dispatch({
			type: 'UPDATE_SEARCH_VALUE',
			payload: value,
		});
		const {searchValue, fontData} = getState();
		dispatch({
			type: 'UPDATE_FONTS_ON_SEARCH_FILTER',
			payload: searchValue,
			fontData
		});
	};
}

export function updateCategoryValue(value: string) {
	return (dispatch: Function, getState: Function) => {
		dispatch({type: 'UPDATING_CATEGORIES'});
		dispatch({
			type: 'UPDATE_CATEGORY_VALUE',
			payload: value
		});
		const {categoryValue, fontData} = getState();
		dispatch({
			type: 'UPDATE_FONTS_ON_CATEGORY_VALUE',
			payload: categoryValue,
			fontData
		});
	};
}

async function deleteFavoriteRequest(dispatch, hrefFamily) {
	dispatch({type: 'DELETING_FAVORITE'});
	try {
		await axios.delete(`${urlPath.fav}${hrefFamily}`);
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

export function addFavorite(font: Object) {
	return async (dispatch: Function, getState: Function) => {
		dispatch({type: 'ADDING_FAVORITE'});
		const { favData } = getState();
		let isInFav = null;
		for(let i = 0; i < favData.length; i ++) {
			isInFav = favData[i].hrefFamily === font.hrefFamily ? true : false;
			if (isInFav) { break; }
		}
		if (!isInFav) {
			try {
				await axios.post(urlPath.fav, font);
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
		} else if (isInFav) {
			deleteFavoriteRequest(dispatch, font.hrefFamily);
		}
	};
}

export function deleteFavorite(hrefFamily: string) {
	return async (dispatch: Function, getState: Function) => {
		dispatch({type: 'DELETING_FAVORITE'});
		deleteFavoriteRequest(dispatch, hrefFamily);
	};
}
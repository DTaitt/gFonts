// @flow
import axios from 'axios';
import {formatFontData, urlPath} from 'utilities/utilities';

export function initializeFontData() {
	return async (dispatch: Function) => {
		dispatch({type: 'LOADING_FONT_DATA'});
		let fonts;
		try {
			const res = await axios.get(urlPath.font);
			fonts = formatFontData(res.data.items.slice(0, 36));
		} catch (error) {
			console.log(error);
		}
		dispatch({
			type: 'INITIALIZE_FONT_DATA',
			payload: fonts,
		});
		dispatch({
			type: 'INITIALIZE_FILTER_FONT_DATA',
			payload: fonts,
		});
	};
}

export function initializeFavData() {
	return async (dispatch: Function, getState) => {
		dispatch({type: 'LOADING_FAV_DATA'});
		let favorites;
		try {
			const res = await axios.get(urlPath.fav);
			favorites = res.data;
		} catch (error) {
			console.log(error);
		}
		dispatch({
			type: 'INITIALIZE_FAV_DATA',
			payload: favorites,
		});
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

export function addFavorite(font) {
	return async (dispatch: Function, getState) => {
		dispatch({type: 'ADDING_FAVORITE'});
		dispatch({
			type: 'ADD_FAV_TO_FAV_SECTION',
			payload: font,
		});
		await axios.post(urlPath.fav, font);
	};
}

export function deleteFavorite(hrefFamily) {
	return async (dispatch: Function, getState) => {
		dispatch({type: 'DELETING_FAVORITE'});
		dispatch({
			type: 'DELETE_FAV_FROM_FAV_SECTION',
			payload: hrefFamily,
		});
		try {
			await axios.delete(`${urlPath.fav}${hrefFamily}`);
		} catch(err) {
			console.log(err);
		}
	};
}
// @flow
type action = {
    type: string,
    payload: Object[],
}

export function fontDataReducer(fontData: Object[] = [], action: action): Object[] {
	switch (action.type) {
	case 'INITIALIZE_FONT_DATA':
		return [
			...fontData,
			...action.payload,
		];
	default:
		return fontData;
	}
}

export function favDataReducer(favData: Object[] = [], action: action): Object[] {
	switch (action.type) {
	case 'INITIALIZE_FAV_DATA':
		return [
			...favData,
			...action.payload,
		];
	case 'ADD_FAV_TO_FAV_SECTION':
		return [
			...favData,
			action.payload
		];
	case 'DELETE_FAV_FROM_FAV_SECTION':
		return favData.filter(fav => {
			return fav.hrefFamily !== action.payload;
		});
	default:
		return favData;
	}
}

export function filterFontDataReducer(filterFontData: Object[] = [], action: action): Object[] {
	switch (action.type) {
	case 'INITIALIZE_FILTER_FONT_DATA':
		return [
			...filterFontData,
			...action.payload,
		];
	case 'UPDATE_FONTS_ON_SEARCH_FILTER':
		let {fontData, payload} = action;
		return fontData.filter(font => {
			return font.family.toLowerCase().indexOf(payload) !== -1;
		});
	case 'UPDATE_FONTS_ON_CATEGORY_VALUE':
		return action.fontData.filter(font => {
			if (action.payload === 'view all') {
				return action.fontData;
			} else {
				return font.category === action.payload;
			}
		});
	default:
		return filterFontData;
	}
}

export function searchReducer(searchValue: string = '', action: {type: string, payload: string}) {
	switch (action.type) {
	case 'UPDATE_SEARCH_VALUE':
		return action.payload;
	default:
		return searchValue;
	}
}

export function categoryReducer(categoryValue: string = 'view all', action: {type: string, payload: string}) {
	switch (action.type) {
	case 'UPDATE_CATEGORY_VALUE':
		return action.payload;
	default:
		return categoryValue;
	}
}

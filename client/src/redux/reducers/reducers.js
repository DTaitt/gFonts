// @flow
export const fontDataReducer = (fonts = [], action) => {
	switch (action.type) {
	case 'INITIALIZE_FONT_DATA':
		return [ ...fonts, ...action.payload ];
	default:
		return fonts;
	}
}

export const favDataReducer = (favorites = [], action) => {
	switch (action.type) {
	case 'INITIALIZE_FAV_DATA':
		return [ ...favorites, ...action.payload ];
	case 'ADD_FAV_TO_FAV_SECTION':
		return [ ...favorites, action.payload ];
	case 'DELETE_FAV_FROM_FAV_SECTION':
		return favorites.filter(fav => fav.hrefFamily !== action.payload);
	default:
		return favorites;
	}
}

export const filterFontDataReducer = (filteredFonts = [], action) => {
	switch (action.type) {
	case 'INITIALIZE_FILTER_FONT_DATA':
		return [ ...filteredFonts, ...action.payload ];
	case 'UPDATE_FONTS_ON_SEARCH_FILTER':
		const byMatchingTitle = (font) => font.family.toLowerCase().indexOf(action.payload) !== -1
		return action.fonts.filter(byMatchingTitle)
	case 'UPDATE_FONTS_ON_CATEGORY_VALUE':
		const filterIfNotOnDefault = (font) => action.payload === 'view all' 
			? action.fonts 
			: font.category === action.payload
		return action.fonts.filter(filterIfNotOnDefault);
	default:
		return filteredFonts;
	}
}

export const searchReducer = (searchValue = '', action) => {
	switch (action.type) {
	case 'UPDATE_SEARCH_VALUE':
		return action.payload;
	default:
		return searchValue;
	}
}

export const categoryReducer = (categoryValue = 'view all', action) => {
	switch (action.type) {
	case 'UPDATE_CATEGORY_VALUE':
		return action.payload;
	default:
		return categoryValue;
	}
}

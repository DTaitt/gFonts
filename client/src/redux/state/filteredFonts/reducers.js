export const filterFontDataReducer = (filteredFonts = [], action) => {
	switch (action.type) {
	case 'INITIALIZE_FILTER_FONT_DATA':
		return action.payload;
	case 'UPDATE_FONTS_ON_SEARCH_FILTER':
		return action.payload
	case 'UPDATE_FONTS_ON_CATEGORY_VALUE':
		const ifNotOnDefault = (font) => action.payload === 'view all' 
			? action.fonts 
			: font.category === action.payload
		return action.fonts.filter(ifNotOnDefault);
	default:
		return filteredFonts;
	}
}
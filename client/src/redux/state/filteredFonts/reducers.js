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
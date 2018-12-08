export const fontDataReducer = (fonts = [], action) => {
	switch (action.type) {
	case 'INITIALIZE_FONT_DATA':
		return action.payload;
	default:
		return fonts;
	}
}
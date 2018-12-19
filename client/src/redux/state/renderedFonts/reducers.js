export const renderedFontsReducer = (renderedFonts = [], action) => {
    switch (action.type) {
        case 'INITIALIZE_FONT_DATA':
            return [...renderedFonts, ...action.payload.slice(0, 12)]
        case 'RENDER_ADDITIONAL_FONTS':
            return [...renderedFonts, ...action.payload]
        default:
            return renderedFonts;
    }
}
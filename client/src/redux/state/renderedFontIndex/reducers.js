export const renderedFontIndexReducer = (renderedFontIndex = 12, action) => {
    switch (action.type) {
        case 'RENDER_ADDITIONAL_FONTS':
        return renderedFontIndex + 12;
        default:
            return renderedFontIndex;
    }
}

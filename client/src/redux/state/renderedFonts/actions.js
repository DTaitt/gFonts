export const renderAdditionalFonts = () => (dispatch, getState) => {
    const { fonts, renderedFontIndex } = getState();
    const endIndex = renderedFontIndex + 12;
    const newFonts = fonts.slice(renderedFontIndex, endIndex)
    dispatch({ 
        type: 'RENDER_ADDITIONAL_FONTS',
        payload: newFonts,
    })
}

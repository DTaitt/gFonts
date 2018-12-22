// ACTION
export const renderMoreFonts = (dispatch, fonts, renderedFontsIndex) => {
    dispatch({ 
        type: 'RENDER_MORE_FONTS',
        fonts,
        renderedFontsIndex,
    })
}

// REDUCER
export const renderedFontsReducer = (state = {}, action) => {
    switch (action.type) {
        case 'RENDER_MORE_FONTS':
            const increment = 12;
            const start = action.renderedFontsIndex;
            const end = action.renderedFontsIndex + increment;
            const newFonts = action.fonts.slice(start, end);
            const newState =  { 
                ...state, 
                renderedFontsIndex: start + increment,
                renderedFonts: [
                    ...state.renderedFonts,
                    ...newFonts,
                ],
            }
            return newState
        default:
            return state;
    }
}
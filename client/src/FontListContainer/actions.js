export function initializeFontData(fontData) {
    return dispatch => {
        dispatch({
            type: 'INITIALIZE_FONT_DATA',
            payload: fontData,
        })
    }
}
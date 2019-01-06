export const addSelectedFont = (family, category) => (dispatch, getState) => {
    const { selectedFonts } = getState();
	const isInFav = selectedFonts.some(selected => selected.family === family)
	if (isInFav) {
		window.Materialize.toast('Already added to set...', 1500) 
	} else {
        dispatch({ type: 'ADD_SELECTED_FONT', payload: { family, category }})
        window.Materialize.toast('Added to font set!', 1500) 
	}
}

export const deleteSelectedFont = (family) => async (dispatch) => {
	dispatch({
        type: 'DELETE_SELECTED',
        payload: family,
    });
}
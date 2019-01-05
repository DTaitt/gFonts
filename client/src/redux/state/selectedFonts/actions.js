export const addSelectedFont = (family, category) => dispatch => {
    dispatch({ type: 'ADD_SELECTED_FONT', payload: { family, category }})
    window.Materialize.toast('Added to Font Set!', 1500) 
}
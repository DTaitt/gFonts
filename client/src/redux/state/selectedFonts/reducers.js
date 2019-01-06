export const selectedFontsReducer = (selectedFonts = [], action) => {
    switch (action.type) {
        case 'ADD_SELECTED_FONT':
            return [...selectedFonts, action.payload].sort()
        case 'DELETE_SELECTED':
            return selectedFonts.filter(selected => selected.family !== action.payload);
        default:
            return selectedFonts
    }
}
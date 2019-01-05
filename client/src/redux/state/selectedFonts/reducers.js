export const selectedFontsReducer = (selectedFonts = [], action) => {
    switch (action.type) {
        case 'ADD_SELECTED_FONT':
            return [...selectedFonts, action.payload].sort()
        default:
            return selectedFonts
    }
}
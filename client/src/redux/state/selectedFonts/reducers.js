export const selectedFontsReducer = (selectedFonts = [], action) => {
    switch (action.type) {
        case 'ADD_PROJECT_FONT':
            return [...selectedFonts, action.payload]
        default:
            return selectedFonts
    }
}
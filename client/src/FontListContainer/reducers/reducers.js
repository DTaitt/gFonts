export function fontDataReducer(fontData = [], action) {
    switch (action.type) {
        case 'INITIALIZE_FONT_DATA':
            return [
                ...fontData,
                ...action.payload
            ];
        default:
            return fontData;
    }
}
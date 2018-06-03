//@flow
type action = {
    type:string,
    payload:Object[],
}

export function fontDataReducer(fontData:Object[] = [], action:action):Object[] {
    switch (action.type) {
        case 'INITIALIZE_FONT_DATA':
            return [
                ...fontData,
                ...action.payload
            ];
            case 'FILTER_BY_SEARCH_QUERY':
            // return fontData.filter((font) => {
            //     return font.family.toLowerCase().indexOf(action.payload) !== -1;
            // })
            return (action.payload === '')
            ? fontData
            : fontData.filter((font) => {
                return font.family.toLowerCase().indexOf(action.payload) !== -1;
            })
        default:
            return fontData;
    }
}

export function filterfontDataReducer(fontData:Object[] = [], action:action):Object[] {
    switch (action.type) {
        case 'INITIALIZE_FONT_DATA':
            return [
                ...fontData,
                ...action.payload
            ];
        case 'FILTER_BY_SEARCH_QUERY':
            // return fontData.filter((font) => {
            //     return font.family.toLowerCase().indexOf(action.payload) !== -1;
            // })
            return (action.payload === '')
            ? fontData
            : fontData.filter((font) => {
                return font.family.toLowerCase().indexOf(action.payload) !== -1;
            })
            break;
        default:
            return fontData;
    }
}

// function filterOnSearchQuery() {
    // (searchValue === '')
    // ? fontData
    // : fontData = fontData.filter((font) => {
    //     return font.family.toLowerCase().indexOf(searchValue) !== -1;
    // })
    
// }
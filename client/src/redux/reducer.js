import { combineReducers } from 'redux';

function fontDataReducer(fontData = [], action) {
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

const rootReducer = combineReducers({
    fontData: fontDataReducer,
})

export default rootReducer;
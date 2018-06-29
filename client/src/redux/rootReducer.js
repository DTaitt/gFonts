import { combineReducers } from 'redux';
import {
	fontDataReducer, 
	searchReducer, 
	filterFontDataReducer, 
	categoryReducer,
	favDataReducer
} from 'redux/reducers/reducers';

const rootReducer = combineReducers({
	fontData: fontDataReducer,
	favData: favDataReducer,
	searchValue: searchReducer,
	categoryValue: categoryReducer,
	filterFontData: filterFontDataReducer
});

export default rootReducer;
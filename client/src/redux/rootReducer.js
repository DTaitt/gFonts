import { combineReducers } from 'redux';
import {
	fontDataReducer, 
	searchReducer, 
	filterFontDataReducer, 
	categoryReducer
} from 'redux/reducers/reducers';


const rootReducer = combineReducers({
	fontData: fontDataReducer,
	searchValue: searchReducer,
	categoryValue: categoryReducer,
	filterFontData: filterFontDataReducer
});
export default rootReducer;
import { combineReducers } from 'redux';
import {fontDataReducer, searchReducer, filterFontDataReducer} from 'redux/reducers/reducers';


const rootReducer = combineReducers({
	fontData: fontDataReducer,
	searchValue: searchReducer,
	filterFontData: filterFontDataReducer
});
export default rootReducer;
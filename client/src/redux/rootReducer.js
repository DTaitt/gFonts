import { combineReducers } from 'redux';
import {
	fontDataReducer, 
	searchReducer, 
	filterFontDataReducer, 
	categoryReducer,
	favDataReducer
} from 'redux/reducers/reducers';

const rootReducer = combineReducers({
	fonts: fontDataReducer,
	favorites: favDataReducer,
	searchValue: searchReducer,
	categoryValue: categoryReducer,
	filteredFonts: filterFontDataReducer
});

export default rootReducer;
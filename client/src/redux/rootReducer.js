import { categoryReducer } from 'redux/state/categoryValue/reducers'
import { combineReducers } from 'redux';
import { favDataReducer } from 'redux/state/favorites/reducers'
import { filterFontDataReducer } from 'redux/state/filteredFonts/reducers'
import { fontDataReducer } from 'redux/state/fonts/reducers'
import { renderedFontIndexReducer } from 'redux/state/renderedFontIndex/reducers'
import { renderedFontsReducer } from './state/renderedFonts/reducers';
import { searchReducer } from 'redux/state/searchValue/reducers'

const rootReducer = combineReducers({
	fonts: fontDataReducer,
	favorites: favDataReducer,
	searchValue: searchReducer,
	categoryValue: categoryReducer,
	filteredFonts: filterFontDataReducer,
	renderedFontIndex: renderedFontIndexReducer,
	renderedFonts: renderedFontsReducer,
});

export default rootReducer;
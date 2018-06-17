import { combineReducers } from 'redux';
import {fontDataReducer} from '../components/FontListContainer/reducers/reducers';
import {searchQueryReducer} from '../components/SearchContainer/reducers/reducers';


const rootReducer = combineReducers({
	fontData: fontDataReducer,
	searchQuery: searchQueryReducer,
});

export default rootReducer;
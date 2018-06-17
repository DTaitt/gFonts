import { combineReducers } from 'redux';
import {fontDataReducer, searchReducer} from 'redux/reducers/reducers';


const rootReducer = combineReducers({
	fontData: fontDataReducer,
	searchValue: searchReducer,
});

export default rootReducer;
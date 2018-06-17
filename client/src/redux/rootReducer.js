import { combineReducers } from 'redux';
import { fontDataReducer } from 'components/FontListContainer/reducers/reducers';
import {searchReducer} from 'components/FontListContainer/reducers/reducers';

const rootReducer = combineReducers({
	fontData: fontDataReducer,
	searchValue: searchReducer
});

export default rootReducer;

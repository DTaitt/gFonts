import { combineReducers } from 'redux';
import {fontDataReducer} from 'components/FontListContainer/reducers/reducers';

const rootReducer = combineReducers({
    fontData: fontDataReducer,
})

export default rootReducer;
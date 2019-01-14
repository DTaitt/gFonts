import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

const middleware = applyMiddleware(thunk);
const store = createStore(rootReducer, composeWithDevTools(middleware))

export const storeFactory = (initialState) => createStore(rootReducer, initialState, composeWithDevTools(middleware))
export default store;

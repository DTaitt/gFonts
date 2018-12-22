import { URLPATH, renameFontVariants } from 'utilities/utilities';

import axios from 'axios'

// ACTION
export const getFonts = async (dispatch) => {
    const { data: { items } } = await axios.get(URLPATH.FONTS);
    const fonts = renameFontVariants(items);
    dispatch({ type: 'INITIALIZE_FONTS', payload: fonts })
}

// REDUCER
export const fontsReducer = (state = {}, action) => {
	switch (action.type) {
        case 'INITIALIZE_FONTS':
            const newState = {...state, fonts: action.payload }
            return newState
	default:
		return state;
	}
}
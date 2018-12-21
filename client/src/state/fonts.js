import { URLPATH, renameFontVariants } from 'utilities/utilities';

import axios from 'axios'

// LOCAL STATE
export const fonts = [];

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
        return { ...state, fonts: action.payload}
	default:
		return state;
	}
}
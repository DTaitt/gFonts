import { URLPATH, renameFontVariants } from 'utilities/utilities';

import axios from 'axios';

export const initializeFontData = () => async (dispatch) => {
    dispatch({type: 'LOADING_FONT_DATA'});
    try {
        const { data: { items } } = await axios.get(URLPATH.FONTS);
        const fonts = renameFontVariants(items);
        dispatch({
            type: 'INITIALIZE_FONT_DATA',
            payload: fonts,
        });
        dispatch({
            type: 'INITIALIZE_FILTER_FONT_DATA',
            payload: fonts,
        });
    } catch (error) {
        console.error(error);
        dispatch({
            type: 'FAILED_FONT_INITIALIZATION'
        });
    }
}
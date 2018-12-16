// @flow
import axios from 'axios';
import { renameFontVariants , URLPATH} from 'utilities/utilities';

export const initializeFontData = () => async (dispatch) => {
    dispatch({type: 'LOADING_FONT_DATA'});
    try {
        const { data: { items } } = await axios.get(URLPATH.FONTS);
        const fonts = renameFontVariants(items).slice(0, 33);
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
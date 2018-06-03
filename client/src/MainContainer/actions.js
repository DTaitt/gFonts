export function initializeFontData(fontData) {
    return dispatch => {
        dispatch({
            type: 'INITIALIZE_FONT_DATA',
            payload: fontData,
        })
    }
}

// import axios from 'axios'

// export async function initializeFontData() {
//     try {
//         const res = await axios.get(
//             `https://www.googleapis.com/webfonts/v1/webfonts?sort=popularity&key=AIzaSyAOVSz0lHeFAs7ll5LO6HTADinYVxy1vt4`
//         );
//         return dispatch => {
//             dispatch({
//                 type: 'INITIALIZE_FONT_DATA',
//                 payload: res.data.items,
//             })
//         }
//     } catch (error) {
//         console.log(error)
//     }
    
// }
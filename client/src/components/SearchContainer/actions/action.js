//@flow
export function updateSearchQuery(query){
    return function(dispatch) {
        dispatch({
            type: 'UPDATE_SEARCH_QUERY',
            payload: query,
        })
        dispatch({
            type: 'FILTER_BY_SEARCH_QUERY',
            payload: query,
        })
    }
}
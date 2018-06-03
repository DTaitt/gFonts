//@flow 
export function searchQueryReducer(searchQuery = '', action) {
    switch (action.type) {
        case 'UPDATE_SEARCH_QUERY':
            return action.payload
        default:
            return searchQuery;
    }
}
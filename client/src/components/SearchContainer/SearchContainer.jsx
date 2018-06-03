//@flow
import React, { Component } from 'react';
import {connect} from 'react-redux';

import Search from '../Search/Search';
import {updateSearchQuery} from './actions/action';

type Props = {}
type State = {}

class SearchContainer extends Component<Props, State>{

    handleSearch = this.handleSearch.bind(this);

    handleSearch(e: any) {
        const query = e.target.value.toLowerCase();
        this.props.updateSearchQuery(query)
    }

    render() {
        return (
            <Search handleSearch={this.handleSearch} />
        )
    }
}

const mapStateToProps = state => {
    return {
        searchQuery: state.searchQuery,
        fontData: state.fontData,
    }
}

const mapDispatchToProps = ({
    updateSearchQuery,
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
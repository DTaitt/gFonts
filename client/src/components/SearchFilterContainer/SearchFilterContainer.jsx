//@flow
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {updateSearchValue} from 'redux/actions/actions';
import SearchFilter from 'components/SearchFilter/SearchFilter';

type Props = {
	updateSearchValue(searchValue: string):string
}
type State = {}

export class SearchFilterContainer extends Component<Props, State> {

    handleSearch = this.handleSearch.bind(this)

    handleSearch({target:{value:searchValue}}: Object){
    	this.props.updateSearchValue(searchValue.toLowerCase());
    }

    render() {
    	return(
    		<SearchFilter handleSearch={this.handleSearch} />
    	);
    }
}

const mapDispatchToProps = ({
	updateSearchValue,
});

const ConnectedSearchFilterContainer = connect(null, mapDispatchToProps)(SearchFilterContainer);
export default ConnectedSearchFilterContainer;

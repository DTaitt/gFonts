//@flow
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {updateSearchValue} from 'redux/actions/actions';
import Search from 'components/Search/Search';

type Props = {
	updateSearchValue(searchValue: string):string
}
type State = {}

export class SearchContainer extends Component<Props, State> {

    handleSearch = this.handleSearch.bind(this)

    handleSearch({target:{value:searchQuery}}: Object){
    	this.props.updateSearchValue(searchQuery.toLowerCase());
    }

    render() {
    	return(
    		<Search handleSearch={this.handleSearch} />
    	);
    }
}

const mapDispatchToProps = ({
	updateSearchValue,
});

const ConnectedSearchContainer = connect(null, mapDispatchToProps)(SearchContainer);
export default ConnectedSearchContainer;

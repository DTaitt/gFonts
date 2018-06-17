//@flow
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {updateSearchValue} from '../FontListContainer/actions/actions';
import {Search} from '../Search/Search';

type Props = {
	searchValue: string,
	updateSearchValue(searchValue: string):string
}
type State = {}

export class SearchContainer extends Component<Props, State> {

    handleSearch = this.handleSearch.bind(this)
    handleSearch(e){
    	this.props.updateSearchValue(e.target.value.toLowerCase());
        
    }
    render() {
    	console.log(this.props.searchValue);
    	return(
    		<Search handleSearch={this.handleSearch} />
    	);
    }
}

const mapStateToProps = state => {
	return {
		searchValue: state.searchValue,
	};
};

const mapDispatchToProps = ({
	updateSearchValue,
});

const ConnectedSearchContainer = connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
export default ConnectedSearchContainer;
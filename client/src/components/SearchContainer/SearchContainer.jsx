//@flow
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {updateSearchValue} from 'redux/actions/actions';
import Search from 'components/Search/Search';

type Props = {
	searchValue: string,
	updateSearchValue(searchValue: string):string
}
type State = {}

export class SearchContainer extends Component<Props, State> {

    handleSearch = this.handleSearch.bind(this)

    handleSearch({target:{value}}){
    	this.props.updateSearchValue(value.toLowerCase());
    }

    render() {
    	return(
    		<Search handleSearch={this.handleSearch} />
    	);
    }
}

const mapStateToProps = state => {
	return {
		searchValue: state.searchValue,
		fontData: state.fontData
	};
};

const mapDispatchToProps = ({
	updateSearchValue,
});

const ConnectedSearchContainer = connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
export default ConnectedSearchContainer;

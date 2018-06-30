//@flow
import React from 'react';
import {connect} from 'react-redux';
import {updateSearchValue} from 'redux/actions/actions';
import SearchFilter from 'components/SearchFilter/SearchFilter';

type Props = {
	updateSearchValue(searchValue: string):string
}

export function SearchFilterContainer(props: Props) {

	function handleSearch(e: Object){
		const searchValue = e.target.value;
    	props.updateSearchValue(searchValue.toLowerCase());
	}

	return <SearchFilter handleSearch={handleSearch} />;
}

const mapDispatchToProps = ({
	updateSearchValue,
});

const ConnectedSearchFilterContainer = connect(null, mapDispatchToProps)(SearchFilterContainer);
export default ConnectedSearchFilterContainer;

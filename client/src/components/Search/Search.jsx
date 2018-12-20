import { CollectionItem, Input, Row } from 'react-materialize';

import React from 'react';
import { connect } from 'react-redux';
import { updateSearchValue } from 'redux/state/searchValue/actions';

const Search = (props) => {
	return (
		<CollectionItem className="search">
			<Row>
				<Input 
					label="Search" 
					validate 
					onChange={(e) => props.updateSearchValue(e.target.value.toLowerCase())}/>
			</Row>
		</CollectionItem>
	)
}

const mapDispatchToProps = ({ updateSearchValue });

export default connect(null, mapDispatchToProps)(Search);

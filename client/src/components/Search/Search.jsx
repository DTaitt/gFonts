//@flow
import React from 'react';
import { connect} from 'react-redux';
import { Row, Input, CollectionItem } from 'react-materialize';
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
